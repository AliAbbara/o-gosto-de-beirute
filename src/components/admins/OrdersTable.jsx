function OrdersTable({ children }) {
  return (
    <div>
      <table className='border-separate border-spacing'>
        <thead>
          <tr>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>Num</th>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>iFood</th>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>Mesa</th>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>
              Lanche
            </th>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>
              Porção
            </th>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>
              Bebida
            </th>
            <th className='w-9 rounded-lg border-2 border-yellow-400'>Total</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default OrdersTable
