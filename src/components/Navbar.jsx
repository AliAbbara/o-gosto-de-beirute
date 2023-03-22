import React from 'react'
import { Link } from 'react-router-dom'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { GiBeard } from 'react-icons/gi'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const menuItems = [
    { title: 'MENU', path: 'menu' },
    { title: 'ORDERS', path: 'orders' },
    { title: 'ADMINS', path: 'admins' },
    { title: 'CONTACT', path: 'contact' },
    { title: 'ABOUT US', path: 'about-us' },
  ]
  return (
    <>
      {/* main nav element */}
      <nav className='flex flex-wrap items-center justify-between px-2 py-3 bg-red-700 mb-3 border-2 border-yellow-400 rounded-lg'>
        {/* logo and button container div */}
        <div className='w-full flex justify-between'>
          {/* Logo icon and name div */}
          <Link
            to='/'
            onClick={() => setNavbarOpen(false)}
            className='ml-5 text-white text-2xl flex items-center w-full font-semibold'>
            <GiBeard /> <p className='ml-2'>O GOSTO DE BEIRUTE</p>
          </Link>
          <button
            className='relative text-white text-2xl px-3 py-1 rounded block lg:hidden outline-none focus:outline-none mr-9 hover:bg-red-600 rounded-lg duration-100'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <TfiLayoutListPost />
          </button>
        </div>
        {/* dropdown menu container div */}
        <div
          className={
            'absolute right-0 top-14 mt-1 bg-red-700 w-36 border-2 lg:hidden border-yellow-400 rounded-lg z-10' +
            (navbarOpen ? ' flex' : ' hidden')
          }>
          <ul className='flex flex-col lg:flex-row list-none w-full h-auto text-center'>
            {menuItems.map((item, index) => (
              <li
                key={index}
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
