import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner'
import OrderCard from '../../components/OrderCard'

function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     const ordersRef = collection(db, 'orders')
  //     const q = query(ordersRef, orderBy('time', 'asc'))
  //     const ordersSnap = await getDocs(q)

  //     let orders = []

  //     ordersSnap.forEach((doc) => {
  //       return orders.push(doc.data())
  //     })
  //     setOrders(orders)
  //     setLoading(false)
  //   }
  //   fetchOrders()
  // }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.time.seconds} order={order} />
      ))}
    </div>
  )
}

export default Orders
