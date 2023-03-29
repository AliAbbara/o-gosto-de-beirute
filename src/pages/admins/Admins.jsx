// eslint-disable-next-line
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// eslint-disable-next-line
import { getDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
// eslint-disable-next-line
import { db } from '../../firebase.config'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import Cashier from './Cashier'
import Orders from './Orders'
import Summary from './Summary'

function Admins() {
  // eslint-disable-next-line
  const auth = getAuth()
  const location = useLocation()
  const navigate = useNavigate()
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false)
  // eslint-disable-next-line
  const [isAdmin, setIsAdmin] = useState(false)
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line
  const [id, setId] = useState('')

  // Checking for route match
  const matchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  useEffect(() => {
    // // Checking if loggedIn
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setLoggedIn(true)
    //     setId(user.uid)
    //   } else {
    //     setLoggedIn(false)
    //   }
    // })
    // // Checking if admin
    // const checkAdmin = async () => {
    //   const usersRef = doc(db, 'users', id)
    //   const userSnap = await getDoc(usersRef)
    //   const user = userSnap.data()
    //   if (user.admin) {
    //     setIsAdmin(true)
    //   } else {
    //     setIsAdmin(false)
    //   }
    // }
    // if (loggedIn) {
    //   checkAdmin()
    //   setLoading(false)
    // } else {
    //   setLoading(false)
    // }
    // eslint-disable-next-line
  }, [])

  if (!loading) {
    return <Spinner />
  }
  return (
    <div className='flex flex-col justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-red-700 rounded-lg shadow-md lg:max-w-xl text-white border border-yellow-400 mb-3 font-semibold'>
        <h1 className='text-3xl text-center text-white'>Admins</h1>
        <div className='flex justify-between text-xl my-2'>
          <Link
            to='/admins/cashier'
            className={
              matchRoute('/admins/cashier') ? 'text-yellow-200' : 'text-white'
            }>
            Cashier
          </Link>
          <Link
            to='/admins/orders'
            className={
              matchRoute('/admins/orders') ? 'text-yellow-200' : 'text-white'
            }>
            Orders
          </Link>
          <Link
            to='/admins/summary'
            className={
              matchRoute('/admins/summary') ? 'text-yellow-200' : 'text-white'
            }>
            Summary
          </Link>
        </div>
        {location.pathname === '/admins/cashier' ? (
          <Cashier />
        ) : location.pathname === '/admins/orders' ? (
          <Orders />
        ) : location.pathname === '/admins/summary' ? (
          <Summary />
        ) : (
          navigate('/not-found')
        )}
      </div>
    </div>
  )
}

export default Admins
