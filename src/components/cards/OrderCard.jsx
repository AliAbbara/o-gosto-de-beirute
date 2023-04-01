function OrderCard({ order }) {
  return (
    <>
      <div className='max-w-full h-auto flex flex-col justify-between bg-red-700 rounded-lg shadow border border-yellow-400 mb-2'>
        {/* order time div */}
        <div className='flex flex-row justify-between px-1 text-xl border-solid border-b border-white'>
          <p>
            {/* {order.time.toDate().toLocaleTimeString('en-US')} */}
            {order.createdAt}
          </p>
          <p>{order.ifood ? order.ifoodNum : 'Not ifood'}</p>
          <p>ba3d shagle</p>
        </div>
        {/* order items div */}
        <div className='p-1 flex flex-col border-solid border-b border-white'>
          {order?.items?.map((item, index) => (
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
          <button className='p-1 bg-yellow-400 border rounded-lg'>Done</button>
        </div>
      </div>
    </>
  )
}

export default OrderCard
