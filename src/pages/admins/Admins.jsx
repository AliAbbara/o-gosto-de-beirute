import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { checkAdmin } from './../../assets/hooks/checkAdmin'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import ContainerCard from '../../components/cards/ContainerCard'
import RedLink from '../../components/links/RedLink'
import AddOrder from './AddOrder'
import Orders from './Orders'
import Summary from './Summary'

function Admins() {
  const location = useLocation()
  const params = useParams()
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
          to='/admins/add-order'
          className={
            matchRoute('/admins/add-order')
              ? 'bg-red-600 text-yellow-400 w-24'
              : 'text-white w-24'
          }>
          Add Order
        </RedLink>
        <RedLink
          to='/admins/orders'
          className={
            matchRoute('/admins/orders')
              ? 'bg-red-600 text-yellow-400 w-24'
              : 'text-white w-24'
          }>
          All Orders
        </RedLink>
        <RedLink
          to='/admins/summary'
          className={
            matchRoute('/admins/summary')
              ? 'bg-red-600 text-yellow-400 w-24'
              : 'text-white w-24'
          }>
          Kitchen Section
        </RedLink>
      </div>
      {params.section === 'add-order' ? (
        <AddOrder />
      ) : params.section === 'orders' ? (
        <Orders />
      ) : params.section === 'summary' ? (
        <Summary />
      ) : (
        navigate('/not-found')
      )}
    </ContainerCard>
  )
}

export default Admins
