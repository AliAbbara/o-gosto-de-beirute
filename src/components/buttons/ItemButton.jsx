function ItemButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'hover:bg-red-600 text-slate-100 rounded-lg duration-100 px-1 mx-1 my-0.5 border-2 border-yellow-400 ' +
        className
      }>
      {children}
    </button>
  )
}

export default ItemButton
