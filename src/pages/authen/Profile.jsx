import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../../firebase.config'
import { checkAdmin } from '../../assets/hooks/checkAdmin'
import { BiPencil } from 'react-icons/bi'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'
// import RedInput from '../components/inputs/RedInput'
import RedLink from '../../components/links/RedLink'
import RedButton from '../../components/buttons/RedButton'
import RedInput from '../../components/inputs/RedInput'
import ContainerCard from '../../components/cards/ContainerCard'

function Profile() {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [nameChange, setNameChange] = useState(false)
  const [emailChange, setEmailChange] = useState(false)
  const [passwordChange, setPasswordChange] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resetEmail: '',
  })
  const { name, email, resetEmail } = formData
  const user = auth.currentUser
  const navigate = useNavigate()
  const fetchAdminStatus = async (id) => {
    if (await checkAdmin(id)) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onEditing = (target) => () => {
    setNameChange(false)
    setEmailChange(false)
    setPasswordChange(false)
    target === 'n' && setNameChange(!nameChange)
    target === 'e' && setEmailChange(!emailChange)
    target === 'p' && setPasswordChange(!passwordChange)
  }

  const onName = async () => {
    if (name.length < 8) {
      toast.warning('Please enter full name!')
    }
    if (name.length > 36) {
      toast.warning('Maximum length for name is 36 characters!')
    }
    try {
      await updateProfile(user, { displayName: name })
      toast.success('Name Changed!')
    } catch (error) {
      toast.error('Somwthing went wrong!')
    }
    window.location.reload()
  }

  const onEmail = async () => {
    if (email === user.email) {
      toast.warning('This is the current email!')
    }
    try {
      await updateEmail(user, email)
      toast.success('Email Changed!')
    } catch (error) {
      toast.error('Something went wrong, please check for a valid email!')
    }
  }

  const onPassword = async (e) => {
    try {
      await sendPasswordResetEmail(auth, resetEmail)
      auth.signOut()
      toast.success('The password reset link was sent!')
      setTimeout(navigate('/'), 1000)
    } catch (error) {
      toast.error('Something went wrong, please check for a correct email!')
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
    // eslint-disable-next-line
  }, [auth, user])

  if (loading) {
    return <Spinner />
  }
  return (
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Profile</h1>
      {loggedIn ? (
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <p>Name: {auth.currentUser?.displayName}</p>
            <RedButton className='flex items-center' onClick={onEditing('n')}>
              <BiPencil />
            </RedButton>
          </div>
          {nameChange && (
            <div className='mb-2 flex flex-col'>
              <label className='block'>Name</label>
              <RedInput
                type='name'
                placeholder='Name'
                id='name'
                value={name}
                onChange={onChange}
              />
              <RedButton className='mt-1' onClick={onName}>
                Change
              </RedButton>
            </div>
          )}

          <div className='flex justify-between mt-2'>
            <p>Email: {auth.currentUser?.email}</p>
            <RedButton className='flex items-center' onClick={onEditing('e')}>
              <BiPencil />
            </RedButton>
          </div>
          {emailChange && (
            <div className='mb-2 flex flex-col'>
              <label className='block'>Email</label>
              <RedInput
                type='email'
                placeholder='Email'
                id='email'
                value={email}
                onChange={onChange}
              />
              <RedButton className='mt-1' onClick={onEmail}>
                Change
              </RedButton>
            </div>
          )}
          <RedButton
            className='w-fit place-self-center'
            onClick={onEditing('p')}>
            Reset Password
          </RedButton>
          {passwordChange && (
            <div className='mb-2 flex flex-col'>
              <label className='block'>Email</label>
              <RedInput
                type='email'
                placeholder='Email'
                id='resetEmail'
                value={resetEmail}
                onChange={onChange}
              />
              <RedButton className='mt-1' onClick={onPassword}>
                Send Password Reset Link
              </RedButton>
            </div>
          )}

          {isAdmin && (
            <RedLink to='/admins/add-order' className='text-center mt-2'>
              Go To Admin Page
            </RedLink>
          )}

          <RedButton className='mt-6' onClick={() => auth.signOut()}>
            Sign Out
          </RedButton>
        </div>
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
