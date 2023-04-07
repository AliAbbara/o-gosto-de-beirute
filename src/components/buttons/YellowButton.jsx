function YellowButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'bg-yellow-300 hover:bg-yellow-400 rounded-lg duration-100 py-1 px-4 focus:ring-4 focus:ring-yellow-500 text-red-700 ' +
        className
      }>
      {children}
    </button>
  )
}

export default YellowButton
