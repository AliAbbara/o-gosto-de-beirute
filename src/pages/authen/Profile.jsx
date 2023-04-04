import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { checkAdmin } from '../../assets/hooks/checkAdmin'
import Spinner from '../../components/Spinner'
// import RedInput from '../components/inputs/RedInput'
import RedLink from '../../components/links/RedLink'
import RedButton from '../../components/buttons/RedButton'
import ContainerCard from '../../components/cards/ContainerCard'

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  const fetchAdminStatus = async (id) => {
    if (await checkAdmin(id)) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        fetchAdminStatus(user.uid)
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
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Profile</h1>
      {loggedIn ? (
        <>
          <p>{auth.currentUser?.displayName}</p>
          <p>{auth.currentUser?.email}</p>
          {isAdmin ? (
            <RedLink to='/admins/cashier'>Go To Admin Page</RedLink>
          ) : (
            ''
          )}
          <RedButton className='mt-6' onClick={() => auth.signOut()}>
            Sign Out
          </RedButton>
        </>
      ) : (
        <>
          <p>Make sure you are signed in!</p>
          <p className='mt-6 text-center'>
            <RedLink to='/sign-in'>Go to sign in page</RedLink>
          </p>
        </>
      )}
    </ContainerCard>
  )
}

export default Profile
