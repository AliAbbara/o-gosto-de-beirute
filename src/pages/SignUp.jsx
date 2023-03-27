import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import { FaEye } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

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
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredential.user

        updateProfile(auth.currentUser, { displayName: name })

        const formDataCopy = { ...formData }
        delete formDataCopy.password
        formDataCopy.timestamp = serverTimestamp()

        await setDoc(doc(db, 'users', user.uid), formDataCopy)

        navigate('/')
      } catch (error) {
        toast.error(
          'Something went wrong! Please check for a correct email or for an already existing account.'
        )
      }
    }
  }

  return (
    <div className='relative flex flex-col justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-red-700 rounded-lg shadow-md lg:max-w-xl text-white border border-yellow-400 mb-3 font-semibold'>
        <h1 className='text-3xl text-center text-white'>Sign Up</h1>
        <form onSubmit={onSubmit} className='mt-6 text-xl'>
          <div className='mb-2'>
            <label htmlFor='name' className='block'>
              Name
            </label>
            <input
              type='name'
              placeholder='Full Name'
              id='name'
              value={name}
              onChange={onChange}
              className='text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              onChange={onChange}
              className='text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password' className='flex items-center'>
              Password
              <FaEye
                onClick={() => setPasswordVisible(!passwordVisible)}
                className='ml-2 hover:cursor-pointer'
              />
            </label>
            <input
              type={passwordVisible ? 'name' : 'password'}
              autoComplete='off'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
              className='font-normal text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>
          <div className='mt-6'>
            <button className='w-full px-4 py-2 tracking-wide text-red-700 transition-colors transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
              Sign Up
            </button>
          </div>
        </form>

        <p className='mt-8 flex items-center flex-col font-semibold text-xl'>
          Or sign up with Google instead{' '}
          <FcGoogle
            onClick={() => console.log('google sign')}
            className='bg-white rounded-lg w-8 h-8 hover:cursor-pointer hover:bg-slate-200 duration-100'
          />
        </p>

        <p className='mt-8 text-center font-semibold text-xl'>
          Already have an account ?{' '}
          <Link to='/sign-in' className='text-base font-medium hover:underline'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
