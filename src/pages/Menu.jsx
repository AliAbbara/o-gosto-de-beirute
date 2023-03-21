import ItemCard from './../components/ItemCard'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
//-----------------------
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase.config'
//--------------------------

function Menu() {
  const [items, setItems] = useState({})
  const [loading, setLoading] = useState(true)

  //------------------Firebase database fetch-------------------
  useEffect(() => {
    const fetchItems = async () => {
      const itemsRef = collection(db, 'items')
      const q = query(itemsRef, orderBy('id', 'asc'))
      const querySnap = await getDocs(q)

      let items = []

      querySnap.forEach((doc) => {
        return items.push(doc.data())
      })

      setItems(items)
      setLoading(false)
    }
    fetchItems()
  }, [])
  //-------------------------------------------------------------

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  )
}

export default Menu
