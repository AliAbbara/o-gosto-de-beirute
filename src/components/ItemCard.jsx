import { useNavigate } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'

function ItemCard({ item }) {
  const navigate = useNavigate()

  const handleMoreInfo = () => {
    navigate('/sign-in')
  }
  const handleAddToOrder = () => {
    navigate('/sign-in')
  }

  return (
    <>
      <div className='max-w-full h-44 flex bg-red-700 rounded-lg shadow border border-yellow-400 mb-3'>
        <img
          className='w-44 max-w-xs rounded-lg border-2 border-white'
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
            <button
              onClick={handleMoreInfo}
              className='p-1 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
              More Info
            </button>
            <button
              onClick={handleAddToOrder}
              className='ml-2 p-1 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCard
