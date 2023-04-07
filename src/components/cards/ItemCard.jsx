import { useNavigate } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'
import ContainerCard from './ContainerCard'
import RedButton from './../buttons/RedButton'

function ItemCard({ item }) {
  const navigate = useNavigate()

  const onMoreInfo = () => {
    navigate('/sign-in')
  }
  const onAddToOrder = () => {
    navigate('/sign-in')
  }

  return (
    <>
      <ContainerCard className='sm:flex'>
        {/* Image div */}
        <div className='h-52 sm:w-64 sm:mr-2'>
          <img
            className='h-full w-full rounded-lg border-2 border-yellow-400'
            src={item?.image}
            alt={item?.name + ' image'}
          />
        </div>
        {/* Right to image div */}
        <div className='flex flex-col justify-between w-full'>
          {/* h5 and icons div */}
          <div className='flex items-center justify-between text-3xl'>
            <div className='flex'>
              <p>{item?.name}</p>
              {item?.spicey && <GiChiliPepper className='sm:ml-2' />}
              {item?.vegan && <SiVectorworks className='sm:ml-2' />}
            </div>
            <p className='sm:ml-2'>R$ {item?.price}</p>
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
            <RedButton onClick={onMoreInfo}>Mais Informações</RedButton>
            <RedButton className='ml-2' onClick={onAddToOrder}>
              Adicionar ao Pedido
            </RedButton>
          </div>
        </div>
      </ContainerCard>
    </>
  )
}

export default ItemCard
