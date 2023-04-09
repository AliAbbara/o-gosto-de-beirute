import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import {
  getDocs,
  collection,
  query,
  orderBy,
  getDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import Spinner from '../../components/other/Spinner'
import OrderCard from '../../components/admins/OrderCard'
import OrdersTable from '../../components/admins/OrdersTable'
import OrderRow from '../../components//admins/OrderRow'
import CloseOrder from '../../components/admins/CloseOrder'

function Orders() {
  const [orders, setOrders] = useState([])
  const [preparing, setPreparing] = useState([])
  const [done, setDone] = useState([])
  const [closing, setClosing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(false)
  const [showOrder, setShowOrder] = useState(false)
  const [filteredOrder, setFilteredOrder] = useState({})

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, 'orders')
        const q = query(ordersRef, orderBy('orderNumber', 'asc'))
        const ordersSnap = await getDocs(q)
        let orders = []
        ordersSnap.forEach((doc) => {
          return orders.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setOrders(orders)
      } catch (error) {
        console.log(error)
        toast.error('Algo deu errado ao receber os pedidos!')
      }
      setLoading(false)
    }
    fetchOrders()
  }, [change])

  useEffect(() => {
    setPreparing(orders.filter((order) => !order.data.done))
    setDone(orders.filter((order) => order.data.done))
  }, [orders])

  const onMutate = (e) => {
    let order = filteredOrder
    order.data.paymentMethod = e.target.value
    setFilteredOrder(order)
  }

  // Dispatching Order
  const onDispatch = async (id) => {
    try {
      const orderRef = doc(db, 'orders', id)
      const docSnap = await getDoc(orderRef)
      let order = docSnap.data()
      order.done = true
      await updateDoc(orderRef, order)
    } catch (error) {
      toast.error('Algo deu errado ao atualizar este pedido!')
    }
    setChange(!change)
  }

  // Showing Close Order
  const onShowClose = () => {
    setClosing(!closing)
  }

  // Closing Order
  const onClose = async (id) => {
    setLoading(true)
    let order = filteredOrder.data
    order.closed = true
    order.closedAt = serverTimestamp()
    setFilteredOrder(order)
    try {
      const orderRef = doc(db, 'orders', id)
      await updateDoc(orderRef, filteredOrder.data)
      toast.success('Pedido fechado com sucesso!')
    } catch (error) {
      toast.error('Algo deu errado ao fechar este pedido!')
    }
    setClosing(false)
    setShowOrder(false)
    setLoading(false)
    setChange(!change)
  }

  // Showing detailed view of selected order
  const onShow = (order) => {
    if (showOrder && filteredOrder === order) {
      setShowOrder(false)
    } else {
      setFilteredOrder(order)
      setShowOrder(true)
    }
  }

  return (
    <div className='flex flex-col'>
      {loading && <Spinner />}
      <div className='flex flex-wrap border-b border-yellow-400'>
        <p className='text-2xl'>Preparando: </p>
        {preparing?.map((order) => (
          <OrderCard key={order.id} order={order} onDispatch={onDispatch} />
        ))}
      </div>
      <div className='flex flex-wrap'>
        <p className='text-2xl'>Feito: </p>
        <OrdersTable>
          {done?.map((order) => (
            <OrderRow key={order.id} order={order} onShow={onShow} />
          ))}
        </OrdersTable>
        {showOrder && (
          <OrderCard order={filteredOrder} onShowClose={onShowClose} />
        )}
        {closing && (
          <CloseOrder
            order={filteredOrder}
            onMutate={onMutate}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  )
}

export default Orders
