function YellowButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'bg-yellow-400 hover:bg-yellow-500 rounded-lg duration-100 py-1 px-4 focus:ring-4 dark:focus:ring-yellow-600 text-red-700 ' +
        className
      }>
      {children}
    </button>
  )
}

export default YellowButton
