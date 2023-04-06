import ContainerCard from './cards/ContainerCard'
import logo from '../assets//imgs/fullLogo.png'
import RedLink from './links/RedLink'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { SiIfood } from 'react-icons/si'

function Footer() {
  return (
    <ContainerCard className='mt-6 flex flex-col text-center'>
      {/* -----------Logo and menu div------------- */}
      <div className='flex justify-evenly p-2'>
        {/* Logo */}
        <img src={logo} alt='full logo' className='w-44 h-auto' />
        {/* Social Media */}
        <div className='flex flex-col items-center justify-evenly'>
          <p className='text-3xl mb-2'>Redes</p>
          <RedLink
            target='_blank'
            to='https://www.instagram.com/ogostodebeirute/'>
            <BsInstagram />
          </RedLink>
          <RedLink to='/contact'>
            <BsWhatsapp />
          </RedLink>
          <RedLink
            target='_blank'
            to='https://www.ifood.com.br/delivery/barretos-sp/o-gosto-centro/71057262-5b24-4e15-8e0c-0a7f54dc008d?UTM_Medium=share'>
            <SiIfood />
          </RedLink>
        </div>
        {/* Links */}
        <div className='flex flex-col'>
          <p className='text-3xl mb-2'>Cardapio</p>
          <RedLink to='/menu/sandwiches'>Lanches</RedLink>
          <RedLink to='/menu/porcoes'>Salgados & Porcoes</RedLink>
          <RedLink to='/menu/drinks'>Bebidas</RedLink>
        </div>
        {/* Menu */}
        <div className='flex flex-col justify-evenly'>
          <p className='text-3xl mb-2'>Paginas</p>
          <RedLink to='/contact'>Contact</RedLink>
          <RedLink to='/about-us'>About Us</RedLink>
        </div>
      </div>
      {/* -----------Rights div------------- */}
      <div className='flex flex-col mt-2'>
        <p>O Gosto de Beirute &reg; - All Right Reserved 2023</p>
        <p>Designed and developed by Ali Abbara &copy; </p>
      </div>
    </ContainerCard>
  )
}

export default Footer
