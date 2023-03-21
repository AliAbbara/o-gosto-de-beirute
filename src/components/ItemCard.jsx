function ItemCard({ item }) {
  return (
    <>
      <div className='max-w-full flex bg-red-700 border rounded-lg shadow dark:bg-red-700 border-yellow-400 mb-3'>
        <img
          className='w-40 max-w-xs rounded-lg'
          src={item?.image}
          alt='shawarma carne'
        />
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold text-white'>{item?.name}</h5>
          <p className='mb-3 text-sm text-slate-50 opacity-75'>
            {item?.ingredients}
          </p>
          <a
            href='#'
            className='px-3 py-2 text-sm font-bold text-center text-red-700 bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600'>
            R$ {item?.price}
          </a>
        </div>
      </div>
    </>
  )
}

export default ItemCard
