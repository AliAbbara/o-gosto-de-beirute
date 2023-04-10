import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { SiIfood } from 'react-icons/si'
import ContainerCard from './ContainerCard'
import RedLink from '../links/RedLink'

function ItemCard({ item }) {
  return (
    <ContainerCard className='sm:flex'>
      {/* Image div */}
      <div
        className={
          (item.type === 'Drink' ? 'h-32 w-32 sm:w-36' : 'h-52 w-52 sm:w-64') +
          ' m-auto sm:mr-2 relative'
        }>
        <p className='p-1 w-fit absolute text-2xl text-red-700 bg-yellow-300 rounded-lg'>
          R$ {item?.price}
        </p>
        <img
          className='w-full h-full rounded-lg border-2 border-yellow-300'
          src={item?.image}
          alt={item?.name + ' image'}
        />
      </div>
      {/* Right to image div */}
      <div className='w-full flex flex-col justify-between text-center sm:text-left'>
        {/* Name and icons div */}
        <div className='flex justify-center sm:justify-start text-3xl'>
          <p>{item?.name}</p>
          {item?.spicey && <GiChiliPepper className='ml-2' />}
          {item?.vegan && <SiVectorworks className='ml-2' />}
        </div>
        {/* Description div */}
        <div className='flex flex-col text-base text-slate-100'>
          <p>{item?.ingredients}</p>
          <p>
            Tempo de Preparação: {item?.prepTime}
            {item?.prepTime === '1' ? ' minuto' : ' minutos'}
          </p>
        </div>
        {/* Buttons div */}
        <div className='flex flex-col sm:flex-row items-center'>
          <RedLink
            target='_blank'
            to='https://www.ifood.com.br/delivery/barretos-sp/o-gosto-centro/71057262-5b24-4e15-8e0c-0a7f54dc008d?UTM_Medium=share'
            className='mr-2 mb-1 sm:mb-0 w-fit flex items-center'>
            Pedir pelo iFood
            <SiIfood className='ml-1' />
          </RedLink>
          <RedLink
            target='_blank'
            to='https://wa.me/5517996620999'
            className='w-fit flex items-center'>
            Fale Conosco
            <BsWhatsapp className='ml-1' />
          </RedLink>
        </div>
      </div>
    </ContainerCard>
  )
}

export default ItemCard
