function RedButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'py-1 px-2 sm:px-4 rounded-lg border-2 border-yellow-300 hover:bg-red-600 duration-100 focus:ring-4 focus:ring-yellow-400 ' +
        className
      }>
      {children}
    </button>
  )
}

export default RedButton
