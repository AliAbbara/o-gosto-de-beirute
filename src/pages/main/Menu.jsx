import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Spinner from '../../components/other/Spinner'
import ItemCard from '../../components/cards/ItemCard'
import RingCard from '../../components/cards/RingCard'
import RedLink from '../../components/links/RedLink'
import { sandwiches } from '../../assets/menu/sandwiches'
import { porcoes } from '../../assets/menu/porcoes'
import { bebidas } from '../../assets/menu/bebidas'

function Menu() {
  const items = sandwiches
  const portions = porcoes
  const drinks = bebidas
  const location = useLocation()
  const params = useParams()
  const [loading, setLoading] = useState(false)

  const matchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, [location.pathname])
  if (loading) {
    return <Spinner />
  }
  return (
    <RingCard title='Cardapio'>
      <div className='flex justify-between items-center text-center my-2'>
        <RedLink
          to='/menu/sandwiches'
          className={
            matchRoute('/menu/sandwiches')
              ? 'bg-red-600 text-yellow-400'
              : 'text-white'
          }>
          Lanches
        </RedLink>
        <RedLink
          to='/menu/porcoes'
          className={
            matchRoute('/menu/porcoes')
              ? 'bg-red-600 text-yellow-400'
              : 'text-white'
          }>
          Salgados & Porções
        </RedLink>
        <RedLink
          to='/menu/drinks'
          className={
            matchRoute('/menu/drinks')
              ? 'bg-red-600 text-yellow-400'
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
          : ''}
      </div>
    </RingCard>
  )
}

export default Menu
