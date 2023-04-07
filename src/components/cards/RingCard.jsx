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
        <p className='absolute font-semibold text-3xl px-1 text-red-700 shadow-xl shadow-yellow-400 rounded-lg bg-yellow-300'>
          {title}
        </p>
      </div>
      {children}
    </div>
  )
}

export default RingCard
