function SwitchButton({ children, className, id, onClick, type, value }) {
  return (
    <button
      className={
        'px-1 rounded-lg border-2 border-yellow-400 hover:bg-red-600 duration-100 focus:ring-yellow-500 ' +
        className
      }
      type={type}
      id={id}
      value={value}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default SwitchButton
