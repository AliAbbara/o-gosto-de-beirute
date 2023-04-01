import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import ItemCard from './../components/cards/ItemCard'
import ContainerCard from '../components/cards/ContainerCard'
import RedLink from './../components/links/RedLink'
import { sandwiches } from '../assets/sandwiches'
import { porcoes } from '../assets/porcoes'
import { bebidas } from '../assets/bebidas'

function Menu() {
  const items = sandwiches
  const portions = porcoes
  const drinks = bebidas
  const location = useLocation()
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
    <ContainerCard>
      <h1 className='text-3xl text-center'>Menu</h1>
      <div className='flex flex-row justify-between text-center my-2'>
        <RedLink
          to='/menu/sandwiches'
          className={
            matchRoute('/menu/sandwiches')
              ? 'bg-red-600 text-yellow-400 w-44'
              : 'text-white w-44'
          }>
          Sandwiches
        </RedLink>
        <RedLink
          to='/menu/porcoes'
          className={
            matchRoute('/menu/porcoes')
              ? 'bg-red-600 text-yellow-400 w-44'
              : 'text-white w-44'
          }>
          Salgados & Portions
        </RedLink>
        <RedLink
          to='/menu/drinks'
          className={
            matchRoute('/menu/drinks')
              ? 'bg-red-600 text-yellow-400 w-44'
              : 'text-white w-44'
          }>
          Drinks
        </RedLink>
      </div>
      <div>
        {location.pathname === '/menu/sandwiches'
          ? items.map((item) => <ItemCard key={item.id} item={item} />)
          : location.pathname === '/menu/porcoes'
          ? portions.map((item) => <ItemCard key={item.id} item={item} />)
          : location.pathname === '/menu/drinks'
          ? drinks.map((item) => <ItemCard key={item.id} item={item} />)
          : ''}
      </div>
    </ContainerCard>
  )
}

export default Menu
