import React from 'react'
import { Link } from 'react-router-dom'
import { TfiLayoutListPost } from 'react-icons/tfi'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const menuItems = [
    {
      id: 1,
      title: 'MENU',
    },
    { id: 2, title: 'ORDERS' },
    { id: 3, title: 'CONTACT' },
    { id: 4, title: 'ABOUT US' },
  ]
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-700 mb-3 border-2 border-yellow-400 rounded-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='/'
              className='text font-bold inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
              O Gosto de Beirute
            </Link>
            <button
              className='text-white cursor-pointer text-2xl px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none mr-2'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <TfiLayoutListPost />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow justify-end' +
              (navbarOpen ? ' flex' : ' hidden')
            }>
            <ul className='flex flex-col lg:flex-row list-none items-center'>
              <li className='nav-item'>
                <Link
                  to='/menu'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-red-500 rounded-lg'>
                  <span className='ml-2'>Menu</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/orders'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  hover:bg-red-500 rounded-lg'>
                  <span className='ml-2'>Orders</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  hover:bg-red-500 rounded-lg'>
                  <span className='ml-2'>Contact</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about-us'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white  hover:bg-red-500 rounded-lg'>
                  <span className='ml-2'>About Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div
        className={
          'absolute w-24 right-2 top-16 ' + (navbarOpen ? ' flex' : ' hidden')
        }>
        <ul className='flex flex-col lg:flex-row list-none items-center bg-red-700 mb-3 border-2 border-yellow-400 rounded-lg'>
          {menuItems.map((item) => (
            <li key={item.id} className='nav-item'>
              <Link
                to='/menu'
                onClick={() => setNavbarOpen(!navbarOpen)}
                className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-red-500 rounded-lg'>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  )
}

export default Navbar
