function OrdersTable({ children }) {
  return (
    <div>
      <table className='border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>Num</th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>iFood</th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>Table</th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>
              Lanche
            </th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>
              Porcao
            </th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>
              Salgado
            </th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>Molho</th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>
              Bebida
            </th>
            <th className='rounded-lg border-2 border-yellow-400 w-9'>Total</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default OrdersTable
