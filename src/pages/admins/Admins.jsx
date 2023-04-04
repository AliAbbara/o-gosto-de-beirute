import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { checkAdmin } from './../../assets/hooks/checkAdmin'
import { useLocation, useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import ContainerCard from '../../components/cards/ContainerCard'
import RedLink from '../../components/links/RedLink'
import Cashier from './Cashier'
import Orders from './Orders'
import Summary from './Summary'

function Admins() {
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  const matchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  const fetchAdminStatus = async (id) => {
    if (await checkAdmin(id)) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchAdminStatus(user.uid)
      }
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [auth])

  if (loading) {
    return <Spinner />
  }
  return (
    <ContainerCard className='flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Admins</h1>
      {isAdmin ? (
        <p>kherye</p>
      ) : (
        'You are not allowed to view the content of this page.'
      )}
      <div className='flex justify-between text-center my-2'>
        <RedLink
          to='/admins/cashier'
          className={
            matchRoute('/admins/cashier')
              ? 'bg-red-600 text-yellow-400 w-24'
              : 'text-white w-24'
          }>
          Cashier
        </RedLink>
        <RedLink
          to='/admins/orders'
          className={
            matchRoute('/admins/orders')
              ? 'bg-red-600 text-yellow-400 w-24'
              : 'text-white w-24'
          }>
          Orders
        </RedLink>
        <RedLink
          to='/admins/summary'
          className={
            matchRoute('/admins/summary')
              ? 'bg-red-600 text-yellow-400 w-24'
              : 'text-white w-24'
          }>
          Summary
        </RedLink>
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
    </ContainerCard>
  )
}

export default Admins
