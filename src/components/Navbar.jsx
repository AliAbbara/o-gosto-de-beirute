import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { GiBeard } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ContainerCard from './cards/ContainerCard'
import RedLink from './links/RedLink'
import RedButton from './buttons/RedButton'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const auth = getAuth()
  const menuItems = [
    { id: '2h8v6b5', title: 'HOME', path: '' },
    { id: '098asd7a0', title: 'MENU', path: 'menu/sandwiches' },
    { id: '44334llk', title: 'ADMINS', path: 'admins/cashier' },
    { id: '00gjkbnf5', title: 'CONTACT', path: 'contact' },
    { id: '65yuer23t', title: 'ABOUT US', path: 'about-us' },
  ]

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }, [auth])

  return (
    <ContainerCard className='w-full flex justify-between'>
      {/* Logo icon and name piece */}
      <Link
        to='/'
        onClick={() => setNavbarOpen(false)}
        className='ml-2 flex items-center font-semibold text-2xl'>
        <GiBeard /> <p className='ml-2'>O GOSTO DE BEIRUTE</p>
      </Link>
      {/* Navbar items piece */}
      <ul className='hidden flex-row list-none w-1/2 h-auto text-center lg:flex md:hidden'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className='py-1 px-4 hover:bg-red-600 hover:cursor-pointer rounded-lg duration-100'>
            <Link to={'/' + item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      {/* Sign in and menu button div */}
      <div className='flex items-center text-xl'>
        <RedLink to={loggedIn ? '/profile' : '/sign-in'}>
          {loggedIn ? <CgProfile className='text-xl' /> : <p>Sign In</p>}
        </RedLink>
        <RedButton
          onClick={() => setNavbarOpen(!navbarOpen)}
          className='relative block lg:hidden ml-2'>
          <TfiLayoutListPost />
        </RedButton>
      </div>
      {/* Dropdown menu container div */}
      <div
        className={
          'absolute right-4 top-16 mt-1 bg-red-700 w-36 border-2 lg:hidden border-yellow-400 rounded-lg z-10 shadow-2xl shadow-black' +
          (navbarOpen ? ' flex' : ' hidden')
        }>
        <ul className='flex flex-col list-none w-full h-auto text-center'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className='flex-1 py-1 px-2 hover:bg-red-600 hover:cursor-pointer rounded-lg duration-100'>
              <Link
                to={'/' + item.path}
                onClick={() => setNavbarOpen(!navbarOpen)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ContainerCard>
  )
}

export default Navbar
