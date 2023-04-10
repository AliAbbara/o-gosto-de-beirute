import { Link } from 'react-router-dom'

function RedLink({ children, className, target, to }) {
  return (
    <Link
      to={to}
      target={target}
      className={
        'py-1 px-2 sm:px-4 rounded-lg text-lg hover:bg-red-600 duration-100 border-2 border-yellow-300 focus:ring-4 focus:ring-yellow-400 ' +
        className
      }>
      {children}
    </Link>
  )
}

export default RedLink
