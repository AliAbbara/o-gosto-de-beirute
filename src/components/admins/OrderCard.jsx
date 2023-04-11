import { Link } from 'react-router-dom'
import { SiIfood } from 'react-icons/si'
import ItemButton from '../buttons/ItemButton'

function OrderCard({ onDispatch, onShowClose, order }) {
  const {
    createdAt,
    done,
    ifood,
    ifoodNum,
    items,
    orderNumber,
    orderType,
    subtotal,
    table,
    total,
  } = order.data
  return (
    <div className='m-1 p-1 w-64 flex flex-col justify-between rounded-lg border-2 border-yellow-400'>
      <div>
        {/* Order number & Time */}
        <div className='h-8 flex justify-between border-b border-yellow-400'>
          <p>Número do Pedido: {orderNumber}</p>
          <p>
            {createdAt
              ?.toDate()
              .toLocaleTimeString([], { timeStyle: 'short', hour12: false })}
          </p>
        </div>
        {/* --------------------------------*/}
        <div className='h-8 flex justify-between border-b border-yellow-400'>
          <p>{ifood ? 'iFood Num: ' + ifoodNum : orderType}</p>
          <p>Mesa: {table}</p>
        </div>
      </div>
      <div className='flex flex-col'>
        {items?.map((item) => (
          <div key={item.uuid}>
            <p>
              *{item.quantity}-{item.name}
            </p>
            <p className='text-slate-300 italic'>{item.comment}</p>
          </div>
        ))}
      </div>
      <div>
        {/* Total & Subtotal */}
        <div className='h-8 flex justify-between border-y border-yellow-400'>
          <p>Total: {total}</p>
          <p>Subtotal: {subtotal}</p>
        </div>
        {/* button for done div */}
        <div className='h-9 flex justify-between items-center'>
          {!done ? (
            <ItemButton onClick={() => onDispatch(order.id)}>
              Despachar
            </ItemButton>
          ) : (
            <ItemButton onClick={onShowClose}>Fechar Pedido</ItemButton>
          )}
          {ifood && <SiIfood />}
          <Link
            className='px-1 ml-1 border-2 border-yellow-400 rounded-lg hover:bg-red-600 duration-100'
            to={`/admins/edit-order/${order.id}`}>
            Editar Pedido
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
