import RedLink from '../links/RedLink'
import RedButton from './../buttons/RedButton'
import { SiIfood } from 'react-icons/si'

function KitchenCard({ order, onDispatch }) {
  const { items, createdAt, id, ifood, ifoodNum, orderType, done, table } =
    order
  return (
    <>
      <div className='flex flex-col justify-between rounded-lg border-2 border-yellow-400 m-1 p-1'>
        {/* Time & ifoodNum & table div */}
        <div className='flex justify-between text-semibold border-b border-yellow-400'>
          <p>
            {createdAt
              .toDate()
              .toLocaleTimeString([], { timeStyle: 'short', hour12: false })}
          </p>
          <p className='border-x-2 border-yellow-400'>
            {ifood ? ifoodNum : orderType}
          </p>
          <p>Num: {table}</p>
        </div>
        {/* order items div */}
        <div className='flex flex-col border-b border-yellow-400'>
          {items?.map((item, index) => (
            <div key={index}>
              <p>
                -{item.quantity}-{item.name}
              </p>
              <p className='text-slate-300'>{item.comment}</p>
            </div>
          ))}
        </div>
        {/* button for done div */}
        <div className='flex justify-evenly items-center'>
          {ifood && <SiIfood />}
          {!done ? (
            <RedButton onClick={() => onDispatch(id)}>Dispatch</RedButton>
          ) : (
            <RedButton>Close Order</RedButton>
          )}
        </div>
      </div>
    </>
  )
}

export default KitchenCard
