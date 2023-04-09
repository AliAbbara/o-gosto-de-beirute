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
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import Spinner from '../../components/other/Spinner'
import KitchenCard from '../../components/admins/KitchenCard'

function Kitchen() {
  const [orders, setOrders] = useState([])
  const [preparing, setPreparing] = useState([])
  const [loading, setLoading] = useState(true)
  const [change, setChange] = useState(false)

  useEffect(() => {
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
        console.log(error)
        toast.error(error)
      }
      setLoading(false)
    }
    fetchOrders()
  }, [change])

  useEffect(() => {
    setPreparing(orders.filter((order) => !order.data.done))
  }, [orders])

  // Dispatching Order
  const onDispatch = async (id) => {
    setLoading(true)
    try {
      const orderRef = doc(db, 'orders', id)
      const docSnap = await getDoc(orderRef)
      let order = docSnap.data()
      order.done = true
      await updateDoc(orderRef, order)
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado ao despachar este pedido!')
    }
    setChange(!change)
    setLoading(false)
  }

  return (
    <div className='flex flex-col'>
      {loading && <Spinner />}
      {preparing?.map((order) => (
        <KitchenCard key={order.id} order={order} onDispatch={onDispatch} />
      ))}
    </div>
  )
}

export default Kitchen
