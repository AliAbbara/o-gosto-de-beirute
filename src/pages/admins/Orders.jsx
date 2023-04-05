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

  const onDispatch = async (id) => {
    console.log(id)
  }

  if (loading) {
    return <Spinner />
  }

  const preparing = orders.filter((order) => !order.data.done)
  const done = orders.filter((order) => order.data.done)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap border-b border-yellow-400'>
        <p className='text-2xl'>Preparing: </p>
        {preparing?.map((order) => (
          <OrderCard
            key={order.id}
            order={order.data}
            onDispatch={onDispatch}
          />
        ))}
      </div>
      <div className='flex flex-wrap'>
        <p className='text-2xl'>Done: </p>
        {done?.map((order) => (
          <OrderCard
            key={order.id}
            order={order.data}
            onDispatch={onDispatch}
          />
        ))}
      </div>
    </div>
  )
}

export default Orders
