import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { SiIfood } from 'react-icons/si'
import logo from '../../assets/imgs/fullLogo.png'
import ContainerCard from '../cards/ContainerCard'
import RedLink from '../links/RedLink'

function Footer() {
  return (
    <ContainerCard className='mt-4 relative flex flex-col text-center'>
      {/* -----------Logo div------------- */}
      <div className='px-2 flex flex-col sm:flex-row flex-wrap justify-evenly items-center'>
        {/* Logo */}
        <img src={logo} alt='full logo' className='h-32 sm:h-44' />
        {/* Social Media */}
        <div className='flex flex-col items-center'>
          <p className='mb-2 text-3xl'>Redes</p>
          <div className='flex sm:flex-col'>
            <RedLink
              className='mx-1'
              target='_blank'
              to='https://www.instagram.com/ogostodebeirute/'>
              <BsInstagram />
            </RedLink>
            <RedLink
              className='mx-1 sm:my-1'
              target='_blank'
              to='https://wa.me/5517996620999'>
              <BsWhatsapp />
            </RedLink>
            <RedLink
              className='mx-1'
              target='_blank'
              to='https://www.ifood.com.br/delivery/barretos-sp/o-gosto-centro/71057262-5b24-4e15-8e0c-0a7f54dc008d?UTM_Medium=share'>
              <SiIfood />
            </RedLink>
          </div>
        </div>
        {/* Pages */}
        <div className='mt-2 flex flex-col'>
          <p className='mb-2 text-3xl'>Paginas</p>
          <div className='flex sm:flex-col'>
            <RedLink className='mx-1 sm:mb-1' to='/menu/sandwiches'>
              Cardapio
            </RedLink>
            <RedLink className='mx-1 sm:mb-1' to='/contact'>
              Contato
            </RedLink>
            <RedLink className='mx-1' to='/about-us'>
              Sobre
            </RedLink>
          </div>
        </div>
      </div>
      {/* -----------Rights div------------- */}
      <div className='mt-2 flex flex-col'>
        <p>O Gosto de Beirute &reg; - Todos os Direitos Reservados 2023</p>
        <p>Designed and developed by Ali Abbara &copy; </p>
      </div>
    </ContainerCard>
  )
}

export default Footer
