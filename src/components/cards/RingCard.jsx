import circleLogo from '../../assets//imgs/circleLogo.png'

function RingCard({ children, title, className }) {
  return (
    <div
      className={
        'relative mt-20 text-white text-lg items-center bg-red-700 rounded-lg shadow-2xl shadow-black border-2 border-yellow-400 mb-2 p-4 pt-16 ' +
        className
      }>
      <div className='absolute -top-16 -left-1 w-32 flex items-center justify-center'>
        <img src={circleLogo} alt='logo' />
        <div className='w-fit absolute text-3xl rounded-xl backdrop-blur-md backdrop-contrast-125'>
          <p>{title}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default RingCard
