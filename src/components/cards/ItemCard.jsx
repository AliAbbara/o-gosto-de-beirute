import { useNavigate } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'
import ContainerCard from './ContainerCard'
import RedButton from '../buttons/RedButton'

function ItemCard({ item }) {
  const navigate = useNavigate()

  const onAddToOrder = () => {
    navigate('/menu/sandwiches')
  }

  return (
    <ContainerCard className='sm:flex'>
      {/* Image div */}
      <div
        className={
          (item.type === 'Drink' ? 'h-32 w-32 sm:w-36' : 'h-52 w-52 sm:w-64') +
          ' relative m-auto sm:mr-2'
        }>
        <p className='absolute text-2xl bg-yellow-300 w-fit p-1 rounded-lg text-red-700'>
          R$ {item?.price}
        </p>
        <img
          className='w-full h-full rounded-lg border-2 border-yellow-300'
          src={item?.image}
          alt={item?.name + ' image'}
        />
      </div>
      {/* Right to image div */}
      <div className='flex flex-col justify-between w-full text-center sm:text-left'>
        {/* Name and icons div */}
        <div className='flex text-3xl justify-center sm:justify-start'>
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
        <div>
          <RedButton className='m-auto sm:m-0' onClick={onAddToOrder}>
            Adicionar ao Pedido
          </RedButton>
        </div>
      </div>
    </ContainerCard>
  )
}

export default ItemCard
