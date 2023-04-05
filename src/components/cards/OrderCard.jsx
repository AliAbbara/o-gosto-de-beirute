import RedLink from '../links/RedLink'
import RedButton from './../buttons/RedButton'
import { SiIfood } from 'react-icons/si'

function OrderCard({ order, onDispatch, onClose }) {
  const {
    items,
    createdAt,
    ifood,
    ifoodNum,
    orderType,
    done,
    total,
    subtotal,
    table,
  } = order.data
  return (
    <>
      <div className='flex flex-col w-64 justify-between rounded-lg border-2 border-yellow-400 m-1 p-1'>
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
          {items?.map((item) => (
            <div key={item.uuid}>
              <p>
                -{item.quantity}-{item.name}
              </p>
              <p className='text-slate-300'>{item.comment}</p>
            </div>
          ))}
        </div>
        {/* Time & ifoodNum & table div */}
        <div className='flex justify-between border-b border-yellow-400'>
          <p>Total: {total}</p>
          <p>Subtotal: {subtotal}</p>
        </div>
        {/* button for done div */}
        <div className='flex justify-between items-center'>
          {!done ? (
            <RedButton onClick={() => onDispatch(order.id)}>Dispatch</RedButton>
          ) : (
            <RedButton onClick={() => onClose(order.id)}>Close Order</RedButton>
          )}
          {ifood && <SiIfood />}
          <RedLink to={`/admins/edit-order/${order.id}`}>Edit Order</RedLink>
        </div>
      </div>
    </>
  )
}

export default OrderCard
