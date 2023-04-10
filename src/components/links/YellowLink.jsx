import { Link } from 'react-router-dom'

function YellowLink({ children, className, to }) {
  return (
    <Link
      to={to}
      className={
        'py-1 px-4 text-red-700 rounded-lg bg-yellow-300 hover:bg-yellow-400 duration-100 focus:ring-4 focus:ring-yellow-500 ' +
        className
      }>
      {children}
    </Link>
  )
}

export default YellowLink
