import ContainerCard from '../cards/ContainerCard'
import logo from '../../assets/imgs/fullLogo.png'
import RedLink from '../links/RedLink'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { SiIfood } from 'react-icons/si'

function Footer() {
  return (
    <ContainerCard className='mt-6 mb-20 sm:mb-auto flex flex-col text-center'>
      {/* -----------Logo and menu div------------- */}
      <div className='flex flex-col sm:flex-row flex-wrap justify-evenly items-center p-2'>
        {/* Logo */}
        <img
          src={logo}
          alt='full logo'
          className='w-32 h-32 sm:w-44 sm:h-auto'
        />
        {/* Social Media */}
        <div className='flex flex-col items-center'>
          <p className='text-3xl mb-2'>Redes</p>
          <div className=' flex sm:flex-col'>
            <RedLink
              className='mb-1'
              target='_blank'
              to='https://www.instagram.com/ogostodebeirute/'>
              <BsInstagram />
            </RedLink>
            <RedLink className='mb-1' target='_blank' to='/contact'>
              <BsWhatsapp />
            </RedLink>
            <RedLink
              className='mb-1'
              target='_blank'
              to='https://www.ifood.com.br/delivery/barretos-sp/o-gosto-centro/71057262-5b24-4e15-8e0c-0a7f54dc008d?UTM_Medium=share'>
              <SiIfood />
            </RedLink>
          </div>
        </div>
        {/* Menu */}
        <div className='flex flex-col'>
          <p className='text-3xl mb-2'>Paginas</p>
          <div className=' flex sm:flex-col'>
            <RedLink className='sm:mb-1 py-0' to='/menu/sandwiches'>
              Cardapio
            </RedLink>
            <RedLink className='sm:mb-1 py-0' to='/contact'>
              Contato
            </RedLink>
            <RedLink className='py-0' to='/about-us'>
              Sobre
            </RedLink>
          </div>
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
