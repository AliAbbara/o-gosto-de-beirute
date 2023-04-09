import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { menu } from '../../assets/menu/menuItems'
import { v4 as uuidv4 } from 'uuid'
import Spinner from '../../components/other/Spinner'
import ContainerCard from '../../components/cards/ContainerCard'
import ItemButton from '../../components/buttons/ItemButton'
import RedButton from '../../components/buttons/RedButton'
import SwitchButton from '../../components/buttons/SwitchButton'
import RedLink from './../../components/links/RedLink'

function EditOrder() {
  //-------------------------Menu Categories--------------------------
  const sandwiches = menu.filter((item) => item.type === 'Sandwich')
  const portions = menu.filter(
    (item) => item.type === 'Porcao' || item.type === 'Salgado'
  )
  const drinks = menu.filter((item) => item.type === 'Drink')
  //------------------------------------------------------------------
  const navigate = useNavigate()
  const params = useParams()

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
    closed: false,
    createdAt: {},
    editedAt: {},
    doneAt: {},
    closedAt: {},
    comment: '',
    customer: '',
    ifood: false,
    ifoodNum: 0,
    paidIfood: true,
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
    ifood,
    ifoodNum,
    paidIfood,
    discount,
    discountPer,
    table,
    total,
    subtotal,
    orderType,
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
      if (paidIfood) {
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
    e.preventDefault()
    setLoading(true)
    setOrder((prevState) => ({
      ...prevState,
      items: bag,
      editedAt: serverTimestamp(),
    }))
    try {
      const docRef = doc(db, 'orders', params.orderId)
      await updateDoc(docRef, order)
      toast.success('O pedido foi editado com sucesso!')
      navigate('/admins/orders')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado ao editar o pedido!')
    }
    setLoading(false)
  }
  // --------------------------------------------------------

  // Fetching order to fill the forms
  useEffect(() => {
    setLoading(true)
    const fetchOrder = async () => {
      const orderRef = doc(db, 'orders', params.orderId)
      const docSnap = await getDoc(orderRef)
      try {
        setOrder(docSnap.data())
      } catch (error) {
        toast.error('Algo deu errado ao receber este pedido!')
      }
      setLoading(false)
    }
    fetchOrder()
    // eslint-disable-next-line
  }, [params.orderId, navigate])

  useEffect(() => {
    setBag(order.items)
    // eslint-disable-next-line
  }, [loading])

  useEffect(() => {
    getTotals()
    setOrder((prevState) => ({
      ...prevState,
      items: bag,
      editedAt: serverTimestamp(),
    }))
    // eslint-disable-next-line
  }, [bagTotal, bagSubtotal, ifood, paidIfood, discount, discountPer, bag])

  if (loading) {
    return <Spinner />
  }
  return (
    <ContainerCard className='flex flex-col justify-between'>
      <h1 className='text-3xl text-center'>Editar Pedido</h1>
      <RedLink className='mb-2 w-fit' to='/admins/orders'>
        Voltar aos Pedidos
      </RedLink>
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
            <option value='Pra Levar'>Pra Levar</option>
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
            className='rounded-lg ml-1 mb-1 text-red-700 px-1'
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
            className='rounded-lg ml-1 text-red-700 px-1 w-14'
            type='number'
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
        <div className='flex mb-1'>
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
                className='rounded-lg text-red-700 w-14'
                type='number'
                id='discountPer'
                value={discountPer}
                onChange={onMutate}
              />
            </div>
          )}
        </div>
        {/* Ifood select div */}
        <div className='flex flex-wrap mb-1'>
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
              <div className='ml-4 '>
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
              <div className='ml-4 '>
                <label>Número do iFood: </label>
                <input
                  className='w-14 rounded-lg ml-1 text-red-700'
                  type='number'
                  id='ifoodNum'
                  value={ifoodNum}
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
            className='rounded-lg ml-1 text-red-700 px-1'
            type='text'
            id='comment'
            value={comment}
            onChange={onMutate}
          />
        </div>

        {/* Bag div */}
        <div className='flex flex-wrap mb-2 justify-center'>
          <label className='mr-1'>O Pedido: </label>
          {bag.length !== 0 &&
            bag.map((bagItem, index) => (
              <div
                key={index}
                className='flex flex-col border-2 rounded-lg border-white p-1 m-1'>
                <div className='flex w-full h-8 justify-between'>
                  <p className='py-1 rounded-lg w-full'>{bagItem.name}</p>
                  <ItemButton
                    type='button'
                    onClick={() => onBagItemDelete(bagItem)}>
                    X
                  </ItemButton>
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
        <RedButton className='w-full' type='submit'>
          Atualizar Pedido
        </RedButton>
      </form>
    </ContainerCard>
  )
}

export default EditOrder
