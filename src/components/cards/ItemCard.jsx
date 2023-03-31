import { useNavigate } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'
import YellowButton from './../buttons/YellowButton'
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
      <ContainerCard className='h-48 flex'>
        <img
          className='w-40 h-40 rounded-lg border-2 border-white'
          src={item?.image}
          alt={item?.name + ' image'}
        />
        {/* left to image div */}
        <div className='flex flex-col p-2 justify-between w-full'>
          {/* h5 and icons div */}
          <div className='m-1 flex flex-row font-semibold text-white items-center justify-between'>
            <div className='flex text-2xl'>
              <p className='text-3xl'>{item?.name}</p>
              {item?.spicey && <GiChiliPepper className='m-1 ml-3' />}
              {item?.vegan && <SiVectorworks className='m-1 ml-3' />}
            </div>
            <p className='text-2xl ml-3 place-self-end'>R$ {item?.price}</p>
          </div>
          {/* description div */}
          <div className='m-1'>
            <p className='text-base font-bold text-slate-200'>
              {item?.ingredients}
            </p>
          </div>
          {/* buttons and price div */}
          <div className='m-1 font-bold text-lg text-red-700'>
            <YellowButton onClick={onMoreInfo}>More Info</YellowButton>
            <YellowButton className='ml-2' onClick={onAddToOrder}>
              Add To Order
            </YellowButton>
          </div>
        </div>
      </ContainerCard>
    </>
  )
}

export default ItemCard
