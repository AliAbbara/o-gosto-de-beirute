import { Link } from 'react-router-dom'

function YellowLink({ children, className, to }) {
  return (
    <Link
      to={to}
      className={
        'flex items-center bg-yellow-400 hover:bg-yellow-500 rounded-lg duration-100 py-1 px-4 ' +
        className
      }>
      {children}
    </Link>
  )
}

export default YellowLink
