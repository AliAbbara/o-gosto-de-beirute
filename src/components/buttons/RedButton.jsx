function RedButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'hover:bg-red-600 rounded-lg duration-100 py-1 px-2 sm:px-4 border-2 border-yellow-300 focus:ring-4 dark:focus:ring-yellow-400 ' +
        className
      }>
      {children}
    </button>
  )
}

export default RedButton
