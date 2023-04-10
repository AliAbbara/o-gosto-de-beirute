function YellowButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'py-1 px-4 text-red-700 rounded-lg bg-yellow-300 hover:bg-yellow-400 duration-100 focus:ring-4 focus:ring-yellow-500 ' +
        className
      }>
      {children}
    </button>
  )
}

export default YellowButton
