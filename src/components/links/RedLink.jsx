import { Link } from 'react-router-dom'

function RedLink({ children, className, target, to }) {
  return (
    <Link
      to={to}
      target={target}
      className={
        'hover:bg-red-600 rounded-lg duration-100 py-1 px-4 text-lg border-2 border-yellow-400 focus:ring-4 focus:ring-yellow-500 ' +
        className
      }>
      {children}
    </Link>
  )
}

export default RedLink
