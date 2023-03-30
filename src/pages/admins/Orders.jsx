// eslint-disable-next-line
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
// eslint-disable-next-line
import { db } from '../../firebase.config'
import { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner'
import OrderCard from '../../components/cards/OrderCard'
import { fakeOrders } from './../../assets/fakeOrders'

function Orders() {
  // const [orders, setOrders] = useState([])
  const orders = fakeOrders
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // const fetchOrders = async () => {
    //   const ordersRef = collection(db, 'orders')
    //   const q = query(ordersRef, orderBy('time', 'asc'))
    //   const ordersSnap = await getDocs(q)
    //   let orders = []
    //   ordersSnap.forEach((doc) => {
    //     return orders.push(doc.data())
    //   })
    //   setOrders(orders)
    //   setLoading(false)
    // }
    // fetchOrders()
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {orders?.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </>
  )
}

export default Orders
