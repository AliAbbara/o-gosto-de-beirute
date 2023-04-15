import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { VscSignIn } from 'react-icons/vsc'
import logo from '../../assets/imgs/fullLogo.png'
import ContainerCard from '../cards/ContainerCard'
import RedLink from '../links/RedLink'
import RedButton from '../buttons/RedButton'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const menuItems = [
    { id: '2h8v6b5', title: 'INÍCIO', path: '' },
    { id: '098asd7a0', title: 'CARDÁPIO', path: 'menu/sandwiches' },
    { id: '00gjkbnf5', title: 'CONTATO', path: 'contact' },
    { id: '65yuer23t', title: 'SOBRE', path: 'about-us' },
  ]

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
    // eslint-disable-next-line
  }, [auth])

  return (
    <ContainerCard className='flex justify-between items-center'>
      {/* Logo icon and name piece */}
      <div className='w-full lg:w-1/3 flex items-center text-2xl font-semibold'>
        <img src={logo} alt='Ogosto logo' className='mr-2 w-10' />
        <Link to='/' onClick={() => setNavbarOpen(false)}>
          O GOSTO DE BEIRUTE
        </Link>
      </div>
      {/* Navbar items list */}
      <ul className='min-w-fit hidden lg:flex text-center'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className='rounded-lg hover:bg-red-600 duration-100'>
            <Link className='px-4' to={'/' + item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Sign in and menu button div */}
      <div className='sm:w-1/3 flex justify-end items-center'>
        <RedLink to={loggedIn ? '/profile' : '/sign-in'}>
          {loggedIn ? <CgProfile size={20} /> : <VscSignIn size={20} />}
        </RedLink>
        <RedButton
          onClick={() => setNavbarOpen(!navbarOpen)}
          className='ml-2 hidden sm:block lg:hidden text-xl'>
          <TfiLayoutListPost />
        </RedButton>
      </div>
      {/* Dropdown menu container div */}
      <div
        className={
          'mt-2 w-36 absolute z-30 lg:hidden fade-in right-4 top-16 rounded-lg bg-red-700 border-2 border-yellow-300 shadow-2xl shadow-black' +
          (navbarOpen ? ' flex' : ' hidden')
        }>
        <ul className='w-full flex flex-col text-center list-none'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className='py-1 rounded-lg hover:bg-red-600 hover:cursor-pointer duration-100'>
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
