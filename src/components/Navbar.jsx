import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { GiBeard } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const auth = getAuth()
  const menuItems = [
    { id: '098asd7a0', title: 'MENU', path: 'menu' },
    { id: '2h8v6b5', title: 'ORDERS', path: 'orders' },
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
    <>
      {/* main nav element */}
      <nav className='flex flex-wrap items-center justify-between px-2 py-3 bg-red-700 mb-3 border-2 border-yellow-400 rounded-lg'>
        {/* logo and button container div */}
        <div className='w-full flex justify-between text-white text-2xl'>
          {/* Logo icon and name div */}
          <Link
            to='/'
            onClick={() => setNavbarOpen(false)}
            className='ml-5 flex items-center font-semibold'>
            <GiBeard /> <p className='ml-2'>O GOSTO DE BEIRUTE</p>
          </Link>
          <div className='flex items-center'>
            <Link to={loggedIn ? '/profile' : '/sign-in'} className='mr-4'>
              {loggedIn ? <CgProfile /> : <p>Sign In</p>}
            </Link>

            <button
              className='relative px-3 py-1 rounded block lg:hidden outline-none focus:outline-none mr-9 hover:bg-red-600 rounded-lg duration-100'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <TfiLayoutListPost />
            </button>
          </div>
        </div>
        {/* dropdown menu container div */}
        <div
          className={
            'absolute right-0 top-14 mt-1 bg-red-700 w-36 border-2 lg:hidden border-yellow-400 rounded-lg z-10' +
            (navbarOpen ? ' flex' : ' hidden')
          }>
          <ul className='flex flex-col lg:flex-row list-none w-full h-auto text-center'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className='flex-1 text-white text-lg p-2 py-3 hover:bg-red-600 rounded-lg duration-100'>
                <Link
                  to={'/' + item.path}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='p-2 px-6'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
