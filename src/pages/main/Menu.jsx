import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { sandwiches } from '../../assets/menu/sandwiches'
import { porcoes } from '../../assets/menu/porcoes'
import { bebidas } from '../../assets/menu/bebidas'
import ItemCard from '../../components/cards/ItemCard'
import RingCard from '../../components/cards/RingCard'
import RedLink from '../../components/links/RedLink'

function Menu({ setLoading }) {
  const items = sandwiches
  const portions = porcoes
  const drinks = bebidas
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  const matchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
    //eslint-disable-next-line
  }, [location.pathname])

  return (
    <RingCard title='Cardapio'>
      <div className='my-2 flex justify-between'>
        <RedLink
          to='/menu/sandwiches'
          className={
            matchRoute('/menu/sandwiches')
              ? 'text-yellow-300 bg-red-600'
              : 'text-white'
          }>
          Lanches
        </RedLink>
        <RedLink
          to='/menu/porcoes'
          className={
            matchRoute('/menu/porcoes')
              ? 'text-yellow-300 bg-red-600'
              : 'text-white'
          }>
          Salgados & Porções
        </RedLink>
        <RedLink
          to='/menu/drinks'
          className={
            matchRoute('/menu/drinks')
              ? 'text-yellow-300 bg-red-600'
              : 'text-white'
          }>
          Bebidas
        </RedLink>
      </div>
      <div>
        {params.category === 'sandwiches'
          ? items.map((item) => <ItemCard key={item.id} item={item} />)
          : params.category === 'porcoes'
          ? portions.map((item) => <ItemCard key={item.id} item={item} />)
          : params.category === 'drinks'
          ? drinks.map((item) => <ItemCard key={item.id} item={item} />)
          : navigate('/not-found')}
      </div>
    </RingCard>
  )
}

export default Menu
