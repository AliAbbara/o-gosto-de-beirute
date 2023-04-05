import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'
import OrderCard from '../../components/cards/OrderCard'
// import { fakeOrders } from './../../assets/fakeOrders'

function Orders() {
  const [orders, setOrders] = useState([])
  // const orders = fakeOrders
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, 'orders')
        const q = query(ordersRef, orderBy('createdAt', 'asc'))
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
