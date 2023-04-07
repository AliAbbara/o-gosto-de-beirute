import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../../firebase.config'
import { toast } from 'react-toastify'
import { FaEye } from 'react-icons/fa'
import RedInput from '../../components/inputs/RedInput'
import RedLink from '../../components/links/RedLink'
import RedButton from '../../components/buttons/RedButton'
import ContainerCard from '../../components/cards/ContainerCard'
import OAuth from '../../components/OAuth'

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast.warning('Please fill all the fields!')
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredential.user
        sendEmailVerification(user)
        const formDataCopy = { ...formData }
        delete formDataCopy.password
        formDataCopy.timestamp = serverTimestamp()

        await setDoc(doc(db, 'users', user.uid), formDataCopy)

        navigate('/profile')
        toast.success(
          'Signed up successfully, make sure to verify your email address!'
        )
      } catch (error) {
        toast.error(
          'Something went wrong! Please check for a correct email or for an already existing account.'
        )
      }
    }
  }

  return (
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Sign Up</h1>
      <form onSubmit={onSubmit} className='mt-6 text-xl'>
        <div className='mb-2'>
          <label className='block'>Name</label>
          <RedInput
            type='name'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='mb-2'>
          <label className='block'>Email</label>
          <RedInput
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='mb-2'>
          <label className='flex items-center'>
            Password
            <FaEye
              onClick={() => setPasswordVisible(!passwordVisible)}
              className='ml-2 hover:cursor-pointer'
            />
          </label>
          <RedInput
            type={passwordVisible ? 'name' : 'password'}
            autoComplete='off'
            placeholder='Password'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <RedButton type='submit' className='w-full tracking-wider mt-6'>
          Sign Up
        </RedButton>
      </form>

      <div className='mt-6 text-center'>
        <p>Already have an account ?</p>
        <RedLink to='/sign-in'>Sign In</RedLink>
      </div>

      <div className='mt-6 flex flex-col items-center'>
        <p>Or sign up with Google instead</p>
        <OAuth />
      </div>
    </ContainerCard>
  )
}

export default SignUp
