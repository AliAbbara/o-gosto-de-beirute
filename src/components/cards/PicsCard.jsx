function PicsCard({ className, onClick, popup1, popup2, popup3, name }) {
  return (
    <div
      onClick={onClick}
      className={
        'h-full w-76 flex rounded-lg bg-red-700 hover:cursor-pointer ' +
        className
      }>
      <div className='flex w-1/2'>
        <img className='rounded-lg' src={popup1} alt={name + 'popup 1'} />
      </div>
      <div className='flex flex-col w-1/2'>
        <img className='h-1/2 rounded-lg' src={popup2} alt={name + 'popup 2'} />
        <img className='h-1/2 rounded-lg' src={popup3} alt={name + 'popup 3'} />
      </div>
    </div>
  )
}

export default PicsCard
