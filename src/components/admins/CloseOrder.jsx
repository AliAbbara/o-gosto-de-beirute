import { useState } from 'react'
import ItemButton from '../buttons/ItemButton'

function CloseOrder({ onClose, onMutate, order }) {
  const { total } = order.data
  const [troco, setTroco] = useState(0)
  const onChange = (e) => {
    setTroco(e.target.value)
  }

  return (
    <div className='flex flex-col w-64 h-40 justify-between rounded-lg border-2 border-yellow-400 m-1 p-1'>
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
          className='ml-1 mr-2 text-red-700 rounded-lg w-12'
          type='number'
          value={troco}
          onChange={onChange}
        />
        <p>= {troco - total}</p>
      </div>
      <ItemButton onClick={() => onClose(order.id)}>Fechar Pedido</ItemButton>
    </div>
  )
}

export default CloseOrder
