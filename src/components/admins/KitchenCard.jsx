import { SiIfood } from 'react-icons/si'
import ItemButton from '../buttons/ItemButton'

function KitchenCard({ onDispatch, order }) {
  const { createdAt, ifood, ifoodNum, items, orderNumber, orderType, table } =
    order.data
  return (
    <>
      <div className='m-1 p-1 flex flex-col justify-between rounded-lg border-2 border-yellow-400'>
        {/* Time & ifoodNum & table div */}
        <div className='flex justify-between text-semibold border-b border-yellow-400'>
          <p>Número do Pedido: {orderNumber}</p>
          <p>
            {createdAt
              .toDate()
              .toLocaleTimeString([], { timeStyle: 'short', hour12: false })}
          </p>
        </div>
        {/* --------------------------------*/}
        <div className='flex justify-between text-semibold border-b border-yellow-400'>
          <p>{ifood ? 'iFood Num: ' + ifoodNum : orderType}</p>
          <p>Mesa: {table}</p>
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
        {/* button for done div */}
        <div className='flex justify-evenly items-center'>
          {ifood && <SiIfood />}
          <ItemButton onClick={() => onDispatch(order.id)}>
            Despachar
          </ItemButton>
        </div>
      </div>
    </>
  )
}

export default KitchenCard
