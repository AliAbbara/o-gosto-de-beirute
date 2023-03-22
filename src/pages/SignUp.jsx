import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { useState } from 'react'

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className='relative flex flex-col justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-red-700 rounded-lg shadow-md lg:max-w-xl text-white border border-yellow-400 mb-3 font-semibold'>
        <h1 className='text-3xl text-center text-white'>Sign Up</h1>
        <form className='mt-6 text-xl'>
          <div className='mb-2'>
            <label for='name' className='block'>
              Name
            </label>
            <input
              type='name'
              className='text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>
          <div className='mb-2'>
            <label for='email' className='block'>
              Email
            </label>
            <input
              type='email'
              className='text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>
          <div className='mb-2'>
            <label for='password' className='flex items-center'>
              Password
              <FaEye
                onClick={() => setPasswordVisible(!passwordVisible)}
                className='ml-2 hover:cursor-pointer'
              />
            </label>
            <input
              type={passwordVisible ? 'name' : 'password'}
              className='font-normal text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>
          <div className='mt-6'>
            <button className='w-full px-4 py-2 tracking-wide text-red-700 transition-colors transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
              Sign Up
            </button>
          </div>
        </form>

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
