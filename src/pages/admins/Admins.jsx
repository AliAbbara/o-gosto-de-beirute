import { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { checkAdmin } from './../../assets/hooks/checkAdmin'
import AddOrder from './AddOrder'
import Orders from './Orders'
import Kitchen from './Kitchen'
import Spinner from '../../components/other/Spinner'
import ContainerCard from '../../components/cards/ContainerCard'
import RedLink from '../../components/links/RedLink'

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

  if (isAdmin) {
    return (
      <ContainerCard className='m-auto flex flex-col justify-center'>
        {loading && <Spinner />}
        <h1 className='text-center text-3xl'>Pedidos</h1>
        <div className='my-2 flex justify-between text-center'>
          <RedLink
            to='/admins/add-order'
            className={
              matchRoute('/admins/add-order')
                ? 'w-24 bg-red-600 text-yellow-400'
                : 'w-24 text-white'
            }>
            Adicionar
          </RedLink>
          <RedLink
            to='/admins/orders'
            className={
              matchRoute('/admins/orders')
                ? 'w-24 bg-red-600 text-yellow-400'
                : 'w-24 text-white'
            }>
            Todos
          </RedLink>
          <RedLink
            to='/admins/kitchen'
            className={
              matchRoute('/admins/kitchen')
                ? 'w-24 bg-red-600 text-yellow-400'
                : 'w-24 text-white'
            }>
            Cozinha
          </RedLink>
        </div>
        {params.section === 'add-order' ? (
          <AddOrder />
        ) : params.section === 'orders' ? (
          <Orders />
        ) : params.section === 'kitchen' ? (
          <Kitchen />
        ) : (
          navigate('/not-found')
        )}
      </ContainerCard>
    )
  } else {
    return (
      <ContainerCard className='text-center'>
        <h1 className='text-3xl'>
          Oops, você não tem permissão para visualizar este conteúdo!
        </h1>
        <RedLink to='/'>Voltar a Página Inicial</RedLink>
      </ContainerCard>
    )
  }
}

export default Admins
