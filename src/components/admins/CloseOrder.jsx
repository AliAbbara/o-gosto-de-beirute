import { useState } from 'react'
import ItemButton from '../buttons/ItemButton'

function CloseOrder({ onClose, onMutate, order }) {
  const { subtotal } = order.data
  const [troco, setTroco] = useState(0)
  const onChange = (e) => {
    setTroco(e.target.value)
  }

  return (
    <div className='m-1 p-1 w-64 h-40 flex flex-col justify-between rounded-lg border-2 border-yellow-400'>
      <label>Forme de Pagamento: </label>
      <select
        className='text-red-700 rounded-lg'
        name='paymentMethod'
        onChange={onMutate}>
        <option value='Dinheiro'>Dinheiro</option>
        <option value='Cartao de Debito'>Cartao de Debito</option>
        <option value='Cartao de Credito'>Cartao de Credito</option>
        <option value='PIX'>PIX</option>
        <option value='iFood'>iFood</option>
      </select>
      <div className='flex mt-1'>
        <p>Troco pra: </p>
        <input
          className='ml-1 mr-2 w-12 text-red-700 rounded-lg'
          type='number'
          value={troco}
          onChange={onChange}
        />
        <p>= {troco - subtotal}</p>
      </div>
      <ItemButton onClick={() => onClose(order.id)}>Fechar Pedido</ItemButton>
    </div>
  )
}

export default CloseOrder
