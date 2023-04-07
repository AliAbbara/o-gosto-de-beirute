import { Link } from 'react-router-dom'

function YellowLink({ children, className, to }) {
  return (
    <Link
      to={to}
      className={
        'flex items-center bg-yellow-300 hover:bg-yellow-400 rounded-lg duration-100 py-1 px-4 focus:ring-4 focus:ring-yellow-500 text-red-700 ' +
        className
      }>
      {children}
    </Link>
  )
}

export default YellowLink
