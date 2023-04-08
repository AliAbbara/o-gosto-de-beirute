import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiLayoutListPost } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { VscSignIn } from 'react-icons/vsc'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
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
      <Link
        to='/'
        onClick={() => setNavbarOpen(false)}
        className='flex items-center font-semibold text-2xl w-full sm:w-1/2'>
        <img src={logo} alt='Ogosto logo' className='w-10 mr-2' />
        <p className='w-full sm:w-auto'>O GOSTO DE BEIRUTE</p>
      </Link>
      {/* Navbar items list */}
      <ul className='hidden lg:flex text-center min-w-fit'>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className='hover:bg-red-600 rounded-lg duration-100'>
            <Link className='px-4' to={'/' + item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Sign in and menu button div */}
      <div className='flex justify-end items-center sm:w-1/3'>
        <RedLink to={loggedIn ? '/profile' : '/sign-in'}>
          {loggedIn ? <CgProfile size={20} /> : <VscSignIn size={20} />}
        </RedLink>
        <RedButton
          onClick={() => setNavbarOpen(!navbarOpen)}
          className='relative hidden sm:block lg:hidden ml-2 text-xl'>
          <TfiLayoutListPost />
        </RedButton>
      </div>
      {/* Dropdown menu container div */}
      <div
        className={
          'absolute lg:hidden right-4 top-16 mt-2 bg-red-700 w-36 border-2 border-yellow-300 rounded-lg z-10 shadow-2xl shadow-black' +
          (navbarOpen ? ' flex' : ' hidden')
        }>
        <ul className='flex flex-col list-none w-full text-center'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className='py-1 hover:bg-red-600 hover:cursor-pointer rounded-lg duration-100'>
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