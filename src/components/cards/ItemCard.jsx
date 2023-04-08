import { useNavigate } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'
import ContainerCard from './ContainerCard'
import RedButton from './../buttons/RedButton'

function ItemCard({ item }) {
  const navigate = useNavigate()

  const onAddToOrder = () => {
    navigate('/sign-in')
  }

  return (
    <>
      <ContainerCard className='sm:flex'>
        {/* Image div */}
        <div className='h-52 sm:w-64 sm:mr-2 relative'>
          <p className='text-2xl bg-yellow-300 w-fit p-1 rounded-lg text-red-700 absolute'>
            R$ {item?.price}
          </p>
          <img
            className='h-full w-full rounded-lg border-2 border-yellow-300'
            src={item?.image}
            alt={item?.name + ' image'}
          />
        </div>
        {/* Right to image div */}
        <div className='flex flex-col justify-between w-full'>
          {/* h5 and icons div */}
          <div className='flex items-center text-3xl'>
            <div className='flex items-center'>
              <p>{item?.name}</p>
              {item?.spicey && <GiChiliPepper className='ml-2' />}
              {item?.vegan && <SiVectorworks className='ml-2' />}
            </div>
          </div>
          {/* Description div */}
          <div className='flex flex-col text-base text-slate-100'>
            <p>{item?.ingredients}</p>
            <p>
              Tempo de Preparação: {item?.prepTime}
              {item?.prepTime === '1' ? ' minute' : ' minutes'}
            </p>
          </div>
          {/* Buttons div */}
          <div className='flex'>
            <RedButton className='m-auto sm:m-0' onClick={onAddToOrder}>
              Adicionar ao Pedido
            </RedButton>
          </div>
        </div>
      </ContainerCard>
    </>
  )
}

export default ItemCard
