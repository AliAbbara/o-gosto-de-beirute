function ItemButton({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'px-1 mx-1 my-0.5 text-slate-100 rounded-lg border-2 border-yellow-400 hover:bg-red-600 duration-100 ' +
        className
      }>
      {children}
    </button>
  )
}

export default ItemButton
