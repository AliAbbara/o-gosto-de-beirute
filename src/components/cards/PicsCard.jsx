function PicsCard({ className, onClick, popup1, popup2, popup3, name }) {
  return (
    <div
      onClick={onClick}
      className={
        'h-full w-76 flex rounded-md bg-red-700 hover:cursor-pointer ' +
        className
      }>
      <div className='w-1/2 flex'>
        <img className='rounded-md' src={popup1} alt={name + 'popup 1'} />
      </div>
      <div className='w-1/2 flex flex-col'>
        <img className='h-1/2 rounded-md' src={popup2} alt={name + 'popup 2'} />
        <img className='h-1/2 rounded-md' src={popup3} alt={name + 'popup 3'} />
      </div>
    </div>
  )
}

export default PicsCard
