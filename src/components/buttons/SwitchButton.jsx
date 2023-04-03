function SwitchButton({ className, type, id, value, onClick, children }) {
  return (
    <button
      className={
        'px-1 rounded-lg border-2 border-yellow-400 hover:bg-red-600 focus:ring-yellow-600 duration-100 ' +
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
