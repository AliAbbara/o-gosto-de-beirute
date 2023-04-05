import RedLink from '../links/RedLink'
// import RedButton from './../buttons/RedButton'

function OrderCard({ order }) {
  const {
    items,
    createdAt,
    editedAt,
    ifood,
    ifoodNum,
    orderType,
    preparing,
    table,
  } = order.data
  return (
    <>
      <div className='flex flex-col w-64 justify-between bg-red-700 rounded-lg shadow border border-yellow-400 mb-2'>
        {/* Time & ifoodNum & table div */}
        <div className='flex flex-row justify-between px-1 text-xl border-solid border-b border-white'>
          <p>{createdAt.toDate().toLocaleTimeString('en-US')}</p>
          <p>{ifood ? ifoodNum : 'Not ifood'}</p>
          <p>
            {order?.done && 'DONE'} {table}
          </p>
        </div>
        {/* order items div */}
        <div className='p-1 flex flex-col border-solid border-b border-white'>
          {items?.map((item, index) => (
            <div key={index}>
              <p>
                -{item.quantity}-{item.name}
              </p>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
        {/* button for done div */}
        <div className='p-1 flex justify-center'>
          <button className='p-1 bg-yellow-400 border rounded-lg'>
            Close Order
          </button>
          <RedLink to={`/admins/edit-order/${order.id}`}>Edit Order</RedLink>
        </div>
      </div>
    </>
  )
}

export default OrderCard
