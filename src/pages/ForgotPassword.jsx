import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()

    if (email === '') {
      toast.warning('Please enter your email!')
    } else {
      try {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, email)
        toast.success('The password reset link was sent!')
        setTimeout(navigate('/'), 1000)
      } catch (error) {
        toast.error('Something went wrong, please check for a correct email!')
      }
    }
  }
  return (
    <div className='relative flex flex-col justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-red-700 rounded-lg shadow-md lg:max-w-xl text-white border border-yellow-400 mb-3 font-semibold'>
        <h1 className='text-3xl text-center text-white'>Password Reset</h1>
        <form onSubmit={onSubmit} className='mt-6 text-xl'>
          <div className='mb-2'>
            <label className='block'>Email</label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              value={email}
              onChange={onChange}
              className='text-red-700 block w-full px-4 py-2 mt-2 bg-white border rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'
            />
          </div>

          <div className='mt-6'>
            <button className='w-full px-4 py-2 tracking-wide text-red-700 transition-colors transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none dark:focus:ring-yellow-600 duration-100'>
              Send Reset Link
            </button>
          </div>
        </form>

        <p className='mt-8 flex items-center flex-col font-semibold text-xl'>
          <Link to='/sign-in' className='text-base font-medium hover:underline'>
            Back to sign in page
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
