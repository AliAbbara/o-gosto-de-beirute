import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import { menu } from '../../assets//menu/menuItems'
import { v4 as uuidv4 } from 'uuid'
import Spinner from '../../components/other/Spinner'
import ItemButton from '../../components/buttons/ItemButton'
import RedButton from '../../components/buttons/RedButton'
import SwitchButton from '../../components/buttons/SwitchButton'

function AddOrder() {
  const sandwiches = menu.filter((item) => item.type === 'Sandwich')
  const portions = menu.filter(
    (item) => item.type === 'Porcao' || item.type === 'Salgado'
  )
  const drinks = menu.filter((item) => item.type === 'Drink')

  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [bag, setBag] = useState([])
  const [bagTotal, setBagTotal] = useState(0)
  const [bagSubtotal, setBagSubtotal] = useState(0)
  const [ordersTotal, setOrdersTotal] = useState(1)
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
    closed: false,
    createdAt: {},
    editedAt: {},
    doneAt: {},
    closedAt: {},
    comment: '',
    customer: '',
    id: '',
    orderNumber: 1,
    ifood: false,
    ifoodNum: 0,
    paidIfood: true,
    ifoodDelivery: 0,
    discount: false,
    discountPer: 0,
    table: 0,
    total: 0,
    subtotal: 0,
    done: false,
    paymentMethod: '',
    orderType: 'Pra Levar',
  })

  const {
    comment,
    customer,
    discount,
    discountPer,
    ifood,
    ifoodDelivery,
    ifoodNum,
    orderType,
    paidIfood,
    subtotal,
    table,
    total,
  } = order

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
    let normalArray = []
    let discountedArray = []
    total = +ifoodDelivery
    subtotal = +ifoodDelivery
    if (ifood) {
      bag.map((item) => {
        return normalArray.push(item.priceIfood * item.quantity)
      })
      normalArray.map((item) => {
        return (total = total + item)
      })
      if (paidIfood) {
        subtotal = total * 0.74
      } else {
        subtotal = total * 0.77
      }
    } else if (discount) {
      bag.map((item) => {
        if (item.type === 'Sandwich') {
          return discountedArray.push(item.price * item.quantity)
        } else {
          return normalArray.push(item.price * item.quantity)
        }
      })
      discountedArray.map((item) => {
        return (total = total + item)
      })
      percentage = (100 - discountPer) / 100
      subtotal = total * percentage
      normalArray.map((item) => {
        total = total + item
        return (subtotal = subtotal + item)
      })
    } else {
      bag.map((item) => {
        return normalArray.push(item.price * item.quantity)
      })
      normalArray.map((item) => {
        return (total = total + item)
      })
      subtotal = total
    }
    setBagTotal(parseFloat(total.toFixed(2)))
    setBagSubtotal(parseFloat(subtotal.toFixed(2)))
    setOrder((prevState) => ({
      ...prevState,
      total: bagTotal,
      subtotal: bagSubtotal,
    }))
    total = 0
    subtotal = 0
    percentage = 0
    normalArray = []
    discountedArray = []
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
    e.preventDefault()
    setOrder((prevState) => ({
      ...prevState,
      createdAt: serverTimestamp(),
      id: uuidv4(),
      items: bag,
    }))
    try {
      const ordersRef = collection(db, 'orders')
      await setDoc(doc(ordersRef), order)
      setBag([])
      navigate('/admins/orders')
      toast.success('Pedido adicionado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado ao adicionar o pedido!')
    }
    setLoading(false)
  }

  useEffect(() => {
    const fetchOrdersTotal = async () => {
      try {
        const ordersRef = collection(db, 'orders')
        const ordersSnap = await getDocs(ordersRef)
        setOrdersTotal(ordersSnap.size)
        setOrder((prevState) => ({
          ...prevState,
          orderNumber: ordersTotal + 1,
        }))
      } catch (error) {
        console.log(error)
        toast.error('Algo deu errado ao buscar o número do pedido!')
      }
      setLoading(false)
    }
    fetchOrdersTotal()
  }, [ordersTotal])
  // --------------------------------------------------------

  useEffect(() => {
    getTotals()
    setOrder((prevState) => ({
      ...prevState,
      items: bag,
      id: uuidv4(),
      createdAt: serverTimestamp(),
    }))
    // eslint-disable-next-line
  }, [
    bagTotal,
    bagSubtotal,
    bag,
    ifood,
    paidIfood,
    ifoodDelivery,
    discount,
    discountPer,
  ])

  return (
    <div className='flex flex-col justify-between'>
      {loading && <Spinner />}
      <form onSubmit={(e) => onOrderSubmit(e)}>
        {/* Order Type div */}
        <div>
          <label>Tipo de Pedido: </label>
          <select
            className='text-red-700 rounded-lg'
            name='orderType'
            id='orderType'
            value={orderType}
            onChange={onMutate}>
            <option value='Pra Levar'>Pra levar</option>
            <option value='No Local'>No Local</option>
          </select>
        </div>
        {/* Items select div */}
        <div className='flex flex-wrap'>
          <div className='flex-1 flex-wrap'>
            <label>Lanches: </label>
            {sandwiches.map((menuItem) => (
              <ItemButton
                key={menuItem.id}
                type='button'
                onClick={() => onItemAdd(menuItem)}>
                {menuItem?.name}
              </ItemButton>
            ))}
          </div>
          <div className='flex-1 flex-wrap'>
            <label>Porções: </label>
            {portions.map((menuItem) => (
              <ItemButton
                key={menuItem.id}
                type='button'
                onClick={() => onItemAdd(menuItem)}>
                {menuItem?.name}
              </ItemButton>
            ))}
          </div>
        </div>
        <div className='w-full flex-wrap'>
          <label>Bebidas: </label>
          {drinks.map((menuItem) => (
            <ItemButton
              key={menuItem.id}
              type='button'
              onClick={() => onItemAdd(menuItem)}>
              {menuItem?.name}
            </ItemButton>
          ))}
        </div>
        {/* Customer name div */}
        <div>
          <label>Nome do Cliente: </label>
          <input
            className='ml-1 mb-1 px-1 text-red-700 rounded-lg'
            type='text'
            id='customer'
            value={customer}
            onChange={onMutate}
          />
        </div>
        {/* Table number div */}
        <div>
          <label>Número da Mesa: </label>
          <input
            className='px-1 ml-1 w-14 text-red-700 rounded-lg'
            type='number'
            min={0}
            id='table'
            value={table}
            onChange={onMutate}
          />
        </div>
        {/* Total and subtotal div */}
        <div>
          <p>Total: {total}</p>
          <p>Subtotal: {subtotal}</p>
        </div>
        {/* Discount select div */}
        <div className='mb-1 flex'>
          <div>
            <label>Desconto? </label>
            <SwitchButton
              className={discount ? ' bg-red-500' : ''}
              type='button'
              id='discount'
              value={true}
              onClick={onMutate}>
              Sim
            </SwitchButton>
            <SwitchButton
              className={discount ? '' : ' bg-red-500'}
              type='button'
              id='discount'
              value={false}
              onClick={onMutate}>
              Não
            </SwitchButton>
          </div>
          {discount && (
            <div className='ml-4'>
              <label>% de Desconto : </label>
              <input
                className='w-14 text-red-700 rounded-lg'
                type='number'
                min={0}
                id='discountPer'
                value={discountPer}
                onChange={onMutate}
              />
            </div>
          )}
        </div>
        {/* Ifood select div */}
        <div className='mb-1 flex flex-wrap'>
          <div>
            <label>É iFood? </label>
            <SwitchButton
              className={ifood ? 'bg-red-500' : ''}
              type='button'
              id='ifood'
              value={true}
              onClick={onMutate}>
              Sim
            </SwitchButton>
            <SwitchButton
              className={ifood ? '' : 'bg-red-500'}
              type='button'
              id='ifood'
              value={false}
              onClick={onMutate}>
              Não
            </SwitchButton>
          </div>

          {ifood && (
            <>
              <div className='ml-4'>
                <label>Pago pelo iFood? </label>
                <SwitchButton
                  className={paidIfood ? ' bg-red-500' : ''}
                  type='button'
                  id='paidIfood'
                  value={true}
                  onClick={onMutate}>
                  Sim
                </SwitchButton>
                <SwitchButton
                  className={paidIfood ? '' : ' bg-red-500'}
                  type='button'
                  id='paidIfood'
                  value={false}
                  onClick={onMutate}>
                  Não
                </SwitchButton>
              </div>
              <div className='ml-4'>
                <label>Número do iFood: </label>
                <input
                  className='ml-1 w-14 text-red-700 rounded-lg'
                  type='number'
                  min={0}
                  id='ifoodNum'
                  value={ifoodNum}
                  onChange={onMutate}
                />
              </div>
              <div className='ml-4'>
                <label>Taxa de Entrega: </label>
                <input
                  className='ml-1 w-14 text-red-700 rounded-lg'
                  type='number'
                  min={0}
                  id='ifoodDelivery'
                  value={ifoodDelivery}
                  onChange={onMutate}
                />
              </div>
            </>
          )}
        </div>

        {/* Order comment div */}
        <div>
          <label>Comentário de Pedido: </label>
          <input
            className='ml-1 px-1 text-red-700 rounded-lg'
            type='text'
            id='comment'
            value={comment}
            onChange={onMutate}
          />
        </div>

        {/* Bag div */}
        <div className='mb-2 flex flex-wrap justify-center'>
          <label className='mr-1'>O Pedido: </label>
          {bag.length !== 0 &&
            bag.map((bagItem, index) => (
              <div
                key={index}
                className='p-1 m-1 flex flex-col rounded-lg border-2 border-white'>
                <div className='w-full h-8 flex justify-between'>
                  <p className='py-1 w-full rounded-lg'>{bagItem.name}</p>
                  <ItemButton
                    type='button'
                    onClick={() => onBagItemDelete(bagItem)}>
                    X
                  </ItemButton>
                </div>
                <div className='mt-1 h-7 flex flex-row justify-center'>
                  <input
                    className='px-1 w-8 text-red-700 rounded-lg'
                    type='number'
                    min={1}
                    id='quantity'
                    value={bagItem.quantity}
                    onChange={onBagMutate(index)}
                  />
                  <input
                    className='px-1 ml-1 text-red-700 rounded-lg'
                    type='text'
                    id='comment'
                    value={bagItem.comment}
                    onChange={onBagMutate(index)}
                  />
                </div>
              </div>
            ))}
        </div>
        <RedButton className='w-full' type='submit'>
          Enviar Pedido
        </RedButton>
      </form>
    </div>
  )
}

export default AddOrder
