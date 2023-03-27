import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Spinner from '../components/Spinner'

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
      setLoading(false)
    })
  }, [auth])

  if (loading) {
    return <Spinner />
  }
  return (
    <div>
      {loggedIn ? auth.currentUser?.displayName : 'You need to sign in'}
      <button className='bg-yellow-400' onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default Profile
