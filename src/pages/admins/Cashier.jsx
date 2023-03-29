import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { menu } from '../../assets/menuItems'
import { v4 as uuidv4 } from 'uuid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import Spinner from './../../components/Spinner'

function Cashier() {
  // eslint-disable-next-line
  const [menuItems, setMenuItems] = useState(menu)
  const [loading, setLoading] = useState(false)
  const [bag, setBag] = useState([])
  const [bagTotal, setBagTotal] = useState(0)
  const [bagSubtotal, setBagSubtotal] = useState(0)
  const [order, setOrder] = useState({
    items: [
      {
        id: '',
        name: '',
        type: '',
        quantity: 1,
        comment: '',
        price: 0,
        priceIfood: 0,
        uuid: '',
      },
    ],
    time: {},
    customer: '',
    ifood: false,
    paidiFood: true,
    discount: false,
    discountPer: 0,
    total: 0,
    subtotal: 0,
    preparing: true,
    done: false,
    orderType: 'Takeaway',
  })

  const {
    customer,
    ifood,
    paidiFood,
    discount,
    discountPer,
    total,
    subtotal,
    orderType,
  } = order

  // eslint-disable-next-line
  const auth = getAuth()

  // -------------------onMutate - Order Form------------------------------
  const onMutate = (e) => {
    let boolean = null
    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }
    setOrder((prevState) => ({
      ...prevState,
      [e.target.id]: boolean ?? e.target.value,
    }))
  }
  // ----------------------------------------------------------

  // --------------------onMutate - Bag Form-------------------------
  const onBagMutate = (index) => (e) => {
    let newBag = [...bag]
    let itemId = newBag[index].uuid
    newBag.map((item) => {
      if (item.uuid === itemId) {
        return (item[e.target.id] = e.target.value)
      } else {
        return item
      }
    })
    setBag(newBag)
  }
  // ----------------------------------------------------

  // -------------------Calculating order totals-------------------
  const getTotals = () => {
    let total = 0
    let subtotal = 0
    let percentage = 0
    let valuesArray = []
    bag.map((item) => {
      if (ifood) {
        return valuesArray.push(item.priceIfood * item.quantity)
      } else {
        return valuesArray.push(item.price * item.quantity)
      }
    })
    valuesArray.map((item) => {
      return (total = total + item)
    })
    if (ifood) {
      if (paidiFood) {
        subtotal = total * 0.74
      } else {
        subtotal = total * 0.77
      }
    } else {
      if (discount) {
        percentage = (100 - discountPer) / 100
        subtotal = total * percentage
      } else {
        subtotal = total
      }
    }
    setBagTotal(total.toFixed(2))
    setBagSubtotal(subtotal.toFixed(2))
    setOrder((prevState) => ({
      ...prevState,
      total: bagTotal,
      subtotal: bagSubtotal,
    }))
    total = 0
    subtotal = 0
    percentage = 0
    valuesArray = []
  }
  // ---------------------------------------------------------

  // --------------------------onItemAdd----------------------
  const onItemAdd = (menuItem) => {
    setBag((prevState) => [...prevState, { ...menuItem, uuid: uuidv4() }])
  }
  // ---------------------------------------------------------

  // ------------------------onBagItemDelete-------------------
  const onBagItemDelete = (bagItem) => {
    const newBag = bag.filter((item) => item.uuid !== bagItem.uuid)
    setBag(newBag)
  }
  // --------------------------------------------------------

  // ------------------------onOrderSubmit-------------------
  const onOrderSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const docRef = await addDoc(collection(db, 'orders'), order)
    console.log(docRef)
    setBag([])
    setLoading(false)
  }
  // --------------------------------------------------------

  useEffect(() => {
    getTotals()
    setOrder((prevState) => ({
      ...prevState,
      items: bag,
      time: serverTimestamp(),
      preparing: true,
      done: false,
    }))
    // eslint-disable-next-line
  }, [bagTotal, bagSubtotal, bag, ifood, paidiFood, discount])

  if (loading) {
    return <Spinner />
  }
  return (
    <div className='flex flex-col h-auto justify-between'>
      <form onSubmit={(e) => onOrderSubmit(e)}>
        {/* Order Type div */}
        <div>
          <label>Order Type: </label>
          <select
            className='text-red-700 rounded-lg'
            name='orderType'
            id='orderType'
            value={orderType}
            onChange={onMutate}>
            <option value='Takeaway'>Takeaway</option>
            <option value='Dine-in'>Dine In</option>
          </select>
        </div>
        {/* Items select div */}
        <div className='flex flex-row flex-wrap'>
          <label>Items:</label>
          {menuItems?.map((menuItem) => (
            <button
              key={menuItem.id}
              type='button'
              onClick={() => onItemAdd(menuItem)}
              className='bg-yellow-400 rounded-lg text-red-700 m-1 px-1 hover:bg-yellow-500 focus:ring-2 focus:outline-none focus:ring-yellow-600 duration-100'>
              {menuItem?.name}
            </button>
          ))}
        </div>
        {/* Customer name div */}
        <div>
          <label>Customer name: </label>
          <input
            className='rounded-lg ml-1 text-red-700'
            type='text'
            id='customer'
            value={customer}
            onChange={onMutate}
          />
        </div>
        {/* Ifood select div */}
        <div className='flex justify-between'>
          <div>
            <label className='mr-3'>iFood: </label>
            <button
              className={
                'px-1 bg-yellow-400 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100' +
                (ifood ? ' bg-yellow-500' : '')
              }
              type='button'
              id='ifood'
              value={true}
              onClick={onMutate}>
              Yes
            </button>
            <button
              className={
                'px-1 bg-yellow-400 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100' +
                (ifood ? '' : ' bg-yellow-500')
              }
              type='button'
              id='ifood'
              value={false}
              onClick={onMutate}>
              No
            </button>
          </div>
          <div>
            <label className='mr-3'>Paid via iFood: </label>
            <button
              className={
                'px-1 bg-yellow-400 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100' +
                (paidiFood ? ' bg-yellow-500' : '')
              }
              type='button'
              id='paidiFood'
              value={true}
              onClick={onMutate}>
              Yes
            </button>
            <button
              className={
                'px-1 bg-yellow-400 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100' +
                (paidiFood ? '' : ' bg-yellow-500')
              }
              type='button'
              id='paidiFood'
              value={false}
              onClick={onMutate}>
              No
            </button>
          </div>
        </div>
        {/* Discount select div */}
        <div className='flex justify-between'>
          <div>
            <label>Discount: </label>
            <button
              className={
                'px-1 bg-yellow-400 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100' +
                (discount ? ' bg-yellow-500' : '')
              }
              type='button'
              id='discount'
              value={true}
              onClick={onMutate}>
              Yes
            </button>
            <button
              className={
                'px-1 bg-yellow-400 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100' +
                (discount ? '' : ' bg-yellow-500')
              }
              type='button'
              id='discount'
              value={false}
              onClick={onMutate}>
              No
            </button>
          </div>
          <div>
            <label>Discount % : </label>
            <input
              className='rounded-lg text-red-700'
              type='number'
              id='discountPer'
              value={discountPer}
              onChange={onMutate}
            />
          </div>
        </div>
        {/* Total and subtotal div */}
        <div>
          <p>Total: {total}</p>
          <p>Subtotal: {subtotal}</p>
        </div>
        {/* Bag div */}
        <div className='flex flex-wrap mb-2 justify-center'>
          <label className='mr-1'>Bag: </label>
          {bag.length !== 0 &&
            bag.map((bagItem, index) => (
              <div
                key={index}
                className='flex flex-col border rounded-lg border-white p-1 m-1'>
                <div className='flex flex-row w-full h-8 justify-between text-red-700'>
                  <div className='bg-yellow-400 py-1 rounded-lg w-full text-center mr-1'>
                    {bagItem.name}
                  </div>
                  <button
                    type='button'
                    onClick={() => onBagItemDelete(bagItem)}
                    className='bg-yellow-400 py-1 px-2 rounded-lg w-8 hover:bg-yellow-500 focus:ring-2 dark:focus:ring-yellow-600 duration-100'>
                    X
                  </button>
                </div>
                <div className='flex flex-row justify-center mt-1 h-7'>
                  <input
                    className='w-8 px-1 rounded-lg text-red-700'
                    type='number'
                    id='quantity'
                    value={bagItem.quantity}
                    onChange={onBagMutate(index)}
                  />
                  <input
                    className='w-auto px-1 rounded-lg text-red-700 ml-1'
                    type='text'
                    id='comment'
                    value={bagItem.comment}
                    onChange={onBagMutate(index)}
                  />
                </div>
              </div>
            ))}
        </div>
        <button
          type='submit'
          className='p-1 w-full text-red-700 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
          Submit Order
        </button>
      </form>
    </div>
  )
}

export default Cashier
