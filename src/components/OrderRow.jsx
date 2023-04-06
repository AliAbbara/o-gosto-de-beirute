import RedButton from './buttons/RedButton'

function OrderRow({ onShow, onClose, order }) {
  const { ifood, items, orderNumber, subtotal, table } = order.data

  const lanches = items.filter((item) => item.type === 'Sandwich')
  const porcaos = items.filter((item) => item.type === 'Porcao')
  const salgados = items.filter((item) => item.type === 'Salgado')
  const molhos = items.filter((item) => item.type === 'Molho')
  const bebidas = items.filter((item) => item.type === 'Drink')

  return (
    <tr>
      <th className='rounded-lg border border-yellow-400'>
        <RedButton onClick={() => onShow(order)}>{orderNumber}</RedButton>
      </th>
      <th className='rounded-lg border border-yellow-400'>
        {ifood ? 'Yes' : 'No'}
      </th>
      <th className='rounded-lg border border-yellow-400'>{table}</th>
      <th className='rounded-lg border border-yellow-400'>
        {lanches.length !== 0 ? lanches.length : '-'}
      </th>
      <th className='rounded-lg border border-yellow-400'>
        {porcaos.length !== 0 ? porcaos.length : '-'}
      </th>
      <th className='rounded-lg border border-yellow-400'>
        {salgados.length !== 0 ? salgados.length : '-'}
      </th>
      <th className='rounded-lg border border-yellow-400'>
        {molhos.length !== 0 ? molhos.length : '-'}
      </th>
      <th className='rounded-lg border border-yellow-400'>
        {bebidas.length !== 0 ? bebidas.length : '-'}
      </th>
      <th className='rounded-lg border border-yellow-400'>
        <RedButton onClick={() => onClose(order)}>{subtotal}</RedButton>
      </th>
    </tr>
  )
}

export default OrderRow
