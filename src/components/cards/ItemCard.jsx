import { useNavigate } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'
import RedButton from './../buttons/RedButton'
import ContainerCard from './ContainerCard'

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
      <ContainerCard className='flex'>
        {/* Image div */}
        <div className='h-48 w-60 mr-2'>
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
              {item?.spicey && <GiChiliPepper className='ml-2' />}
              {item?.vegan && <SiVectorworks className='ml-2' />}
            </div>
            <p className='ml-2'>R$ {item?.price}</p>
          </div>
          {/* Description div */}
          <div className='flex flex-col text-base text-slate-100'>
            <p>{item?.ingredients}</p>
            <p>
              Preparation Time: {item?.prepTime}
              {item?.prepTime === '1' ? ' minute' : ' minutes'}
            </p>
          </div>
          {/* Buttons div */}
          <div>
            <RedButton onClick={onMoreInfo}>More Info</RedButton>
            <RedButton className='ml-2' onClick={onAddToOrder}>
              Add To Order
            </RedButton>
          </div>
        </div>
      </ContainerCard>
    </>
  )
}

export default ItemCard
