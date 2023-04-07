import {
  getDocs,
  collection,
  query,
  orderBy,
  getDoc,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Spinner from '../../components/other/Spinner'
import OrderCard from '../../components/cards/OrderCard'
import OrdersTable from '../../components/OrdersTable'
import OrderRow from '../../components/OrderRow'

function Orders() {
  const [orders, setOrders] = useState([])
  const [preparing, setPreparing] = useState([])
  const [done, setDone] = useState([])
  const [loading, setLoading] = useState(false)
  const [change, setChange] = useState(false)
  const [showOrder, setShowOrder] = useState(false)
  const [filteredOrder, setFilteredOrder] = useState({})

  useEffect(() => {
    setLoading(true)
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
        toast.error(error)
      }
      setLoading(false)
    }
    fetchOrders()
  }, [change])

  useEffect(() => {
    setPreparing(orders.filter((order) => !order.data.done))
    setDone(orders.filter((order) => order.data.done))
  }, [orders])

  // Dispatching Order
  const onDispatch = async (id) => {
    try {
      const orderRef = doc(db, 'orders', id)
      const docSnap = await getDoc(orderRef)
      let order = docSnap.data()
      order.done = true
      await updateDoc(orderRef, order)
    } catch (error) {
      toast.error('Something went wrong updating this order!')
    }
    setChange(!change)
  }

  // Closing Order
  const onClose = async (id) => {
    console.log(id)
    // try {
    //   const orderRef = doc(db, 'orders', id)
    //   const docSnap = await getDoc(orderRef)
    //   let order = docSnap.data()
    //   order.done = false
    //   await updateDoc(orderRef, order)
    // } catch (error) {
    //   toast.error('Something went wrong updating this order!')
    // }
    // setChange(!change)
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

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap border-b border-yellow-400'>
        <p className='text-2xl'>Preparing: </p>
        {preparing?.map((order) => (
          <OrderCard key={order.id} order={order} onDispatch={onDispatch} />
        ))}
      </div>
      <div className='flex flex-wrap'>
        <p className='text-2xl'>Done: </p>
        <OrdersTable>
          {done?.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              onShow={onShow}
              onClose={onClose}
            />
          ))}
        </OrdersTable>
        {showOrder && <OrderCard order={filteredOrder} />}
      </div>
    </div>
  )
}

export default Orders
