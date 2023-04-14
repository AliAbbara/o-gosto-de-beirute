import circleLogo from '../../assets//imgs/circleLogo.png'

function RingCard({ children, className, title }) {
  return (
    <div
      className={
        'mb-4 mt-20 p-4 pt-20 fade-in relative items-center text-lg text-white rounded-lg bg-red-700 border-2 border-yellow-300 shadow-2xl shadow-black ' +
        className
      }>
      <div className='absolute w-ring flex justify-center items-center'>
        <img src={circleLogo} alt='logo' />
        <div className='w-fit absolute text-3xl rounded-lg bg-red-700'>
          <p>{title}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default RingCard
