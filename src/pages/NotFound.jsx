import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h3>Ooops, this page was not found.</h3>
      <Link to='/'>Back to the home page</Link>
    </div>
  )
}

export default NotFound
