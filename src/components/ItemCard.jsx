import { Link } from 'react-router-dom'
import { GiChiliPepper } from 'react-icons/gi'
import { SiVectorworks } from 'react-icons/si'

function ItemCard({ item }) {
  return (
    <>
      <div className='max-w-full h-44 flex bg-red-700 border rounded-lg shadow dark:bg-red-700 border-yellow-400 mb-3'>
        <img
          className='w-44 max-w-xs rounded-lg border-2 border-white'
          src={item?.image}
          alt={item?.name + ' image'}
        />
        {/* left to image div */}
        <div className='flex flex-col p-2 justify-between'>
          {/* h5 and icons div */}
          <div className='m-2 flex flex-row'>
            <h3 className='text-3xl font-semibold text-white'>{item?.name}</h3>
            {item?.spicey && (
              <GiChiliPepper className='m-1 ml-3 text-white text-2xl' />
            )}
            {item?.vegan && (
              <SiVectorworks className='m-1 ml-3 text-white text-2xl' />
            )}
          </div>
          {/* description div */}
          <div className='m-2'>
            <p className='text-base font-bold text-slate-200'>
              {item?.ingredients}
            </p>
          </div>
          {/* buttons and price div */}
          <div className='m-2'>
            <Link
              to=''
              className='px-2 py-2 text-lg font-bold text-center text-red-700 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600'>
              R$ {item?.price}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCard
