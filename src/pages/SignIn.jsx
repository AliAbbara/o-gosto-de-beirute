import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { FaEye } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      toast.warning('Please fill all the fields!')
    } else {
      try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        if (userCredential.user) {
          navigate('/')
        }
      } catch (error) {
        toast.error('Wrong email or password!')
      }
    }
  }

  return (
    <div className='relative flex flex-col justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-red-700 rounded-lg shadow-md lg:max-w-xl text-white border border-yellow-400 mb-3 font-semibold'>
        <h1 className='text-3xl text-center text-white'>Sign In</h1>
        <form onSubmit={onSubmit} className='mt-6 text-xl'>
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
          <Link
            to='/forgot-password'
            className='text-base font-medium hover:underline'>
            Forgot Password ?
          </Link>
          <div className='mt-6'>
            <button className='w-full px-4 py-2 tracking-wide text-red-700 transition-colors transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
              Sign In
            </button>
          </div>
        </form>

        <p className='mt-8 flex items-center flex-col font-semibold text-xl'>
          Or sign in with Google instead{' '}
          <FcGoogle className='bg-white rounded-lg w-8 h-8 hover:cursor-pointer hover:bg-slate-200 duration-100' />
        </p>

        <p className='mt-8 text-center font-semibold text-xl'>
          Don't have an account ?{' '}
          <Link to='/sign-up' className='text-base font-medium hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
