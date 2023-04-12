import circleLogo from '../../assets//imgs/circleLogo.png'

function RingCard({ children, className, title }) {
  return (
    <div
      className={
        'mb-4 mt-20 p-4 pt-20 relative items-center text-lg text-white rounded-lg bg-red-700 border-2 border-yellow-300 shadow-2xl shadow-black ' +
        className
      }>
      <div className='absolute -top-16 -left-1.5 w-32 flex justify-center items-center'>
        <img src={circleLogo} alt='logo' />
        <div className='w-fit absolute text-3xl rounded-lg backdrop-blur-md backdrop-contrast-125'>
          <p>{title}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default RingCard
