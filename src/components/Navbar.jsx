import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { GiBeard } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import ContainerCard from './cards/ContainerCard'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const auth = getAuth()
  const menuItems = [
    { id: '2h8v6b5', title: 'HOME', path: '' },
    { id: '098asd7a0', title: 'MENU', path: 'menu' },
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
    <ContainerCard>
      {/* Main navbar container */}
      <div className='w-full flex justify-between text-2xl'>
        {/* Logo icon and name piece */}
        <Link
          to='/'
          onClick={() => setNavbarOpen(false)}
          className='ml-2 flex items-center font-semibold'>
          <GiBeard /> <p className='ml-2'>O GOSTO DE BEIRUTE</p>
        </Link>
        {/* Navbar items piece */}
        <ul className='hidden flex-row list-none w-1/2 h-auto text-center lg:flex md:hidden'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className='text-white text-lg py-1 px-4 hover:bg-red-600 hover:cursor-pointer rounded-lg duration-100'>
              <Link to={'/' + item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        {/* Sign in and menu button piece */}
        <div className='flex items-center'>
          <Link
            className='hover:bg-red-600 rounded-lg duration-100 py-1 px-4'
            to={loggedIn ? '/profile' : '/sign-in'}>
            {loggedIn ? <CgProfile /> : <p>Sign In</p>}
          </Link>
          <button
            className='relative py-1 px-4 rounded block lg:hidden outline-none focus:outline-none hover:bg-red-600 rounded-lg duration-100'
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <TfiLayoutListPost />
          </button>
        </div>
      </div>
      {/* Dropdown menu container div */}
      <div
        className={
          'absolute right-4 top-14 mt-1 bg-red-700 w-36 border-2 lg:hidden border-yellow-400 rounded-lg z-10' +
          (navbarOpen ? ' flex' : ' hidden')
        }>
        <ul className='flex flex-col list-none w-full h-auto text-center'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className='flex-1 text-white text-lg py-1 px-2 hover:bg-red-600 hover:cursor-pointer rounded-lg duration-100'>
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
