import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { menuItems } from '../../assets/menuItems'
import {
  query,
  orderBy,
  getDocs,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

function Cashier() {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)
  const [bag, setBag] = useState([])
  const [bagTotal, setBagTotal] = useState(0)
  // eslint-disable-next-line
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
    orderType: '',
  })

  const {
    items,
    time,
    customer,
    ifood,
    paidiFood,
    discount,
    discountPer,
    total,
    subtotal,
    preparing,
    done,
    orderType,
  } = order

  const auth = getAuth()

  // -------------------Order Form------------------------------
  const onMutate = (e) => {
    let boolean = null
    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }
    //Text/Booleans/Numbers
    setOrder((prevState) => ({
      ...prevState,
      [e.target.id]: boolean ?? e.target.value,
    }))
  }
  // ----------------------------------------------------------

  // --------------------Bag Form-------------------------
  const onMutateBag = (e, index) => {
    let newBag = [...bag]
    if (e.target.id === 'comment') {
      newBag[index].comment = e.target.value
      setBag(newBag)
    } else {
      newBag[index].quantity = e.target.value
      setBag(newBag)
    }
  }
  // ----------------------------------------------------

  useEffect(() => {
    getTotals()
    console.log(bagTotal)
  })

  // -------------------Calculating totals-------------------
  const getTotals = () => {
    let total = 0
    let subtotal = 0
    let percentage = 0
    let valuesArray = []

    bag.map((item) => {
      valuesArray.push(item.price * item.quantity)
    })
    valuesArray.map((item) => {
      total = total + item
    })
    setBagTotal(total)
    if (discount) {
      percentage = (100 - discountPer) / 100
      subtotal = total * percentage
    }
    // setBagSubtotal(subtotal)
    valuesArray = []
    total = 0
    subtotal = 0
  }
  // ---------------------------------------------------------

  // --------------------------onItemAdd----------------------
  const handleItemAdd = (menuItem) => {
    bag.push(menuItem)
    getTotals()
  }
  // ---------------------------------------------------------

  // ------------------------onBagItemClick-------------------
  const handleBagItemClick = (bagItem) => {
    console.log(bag)
  }
  // --------------------------------------------------------

  // ------------------------onOrderSubmit-------------------
  const onOrderSubmit = (e) => {
    e.preventDefault()
    // setOrder((prevState) => ({ ...prevState, items: bag }))
    console.log(order)
    setBag([])
  }
  // --------------------------------------------------------

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
          {menuItems?.map((menuItem, index) => (
            <button
              key={menuItem.id}
              type='button'
              onClick={() => handleItemAdd(menuItem)}
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
            <label>Discount %: </label>
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
                key={bagItem.name + index}
                className='flex flex-col border rounded-lg border-white p-1'>
                <button
                  type='button'
                  onClick={() => handleBagItemClick(bagItem)}
                  className='bg-yellow-400 py-1 rounded-lg text-red-700 hover:bg-yellow-500 focus:ring-2 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
                  {bagItem.name}
                </button>
                <div className='flex flex-row justify-center mt-1'>
                  <input
                    className='w-8 px-1 rounded-lg text-red-700'
                    type='number'
                    id='quantity'
                    value={bagItem.quantity}
                    onChange={(e) => onMutateBag(e, index)}
                  />
                  {(bagItem.type === 'Sandwitch' ||
                    bagItem.type === 'Porcao') && (
                    <input
                      className='w-auto rounded-lg text-red-700 ml-1'
                      type='text'
                      id='comment'
                      value={bagItem.comment}
                      onChange={(e) => onMutateBag(e, index)}
                    />
                  )}
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
