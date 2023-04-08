function RedInput({
  className,
  onChange,
  id,
  placeholder,
  type,
  value,
  autoComplete,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      className={
        'w-full py-1 px-2 rounded-lg text-red-700 focus:ring-4 focus:outline-none focus:ring-yellow-500 duration-100 ' +
        className
      }
      autoComplete={autoComplete}
      required
    />
  )
}

export default RedInput
