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
        'py-1 px-2 w-full text-red-700 rounded-lg duration-100 focus:ring-4 focus:ring-yellow-500 focus:outline-none ' +
        className
      }
      autoComplete={autoComplete}
      required
    />
  )
}

export default RedInput
