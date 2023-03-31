import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { FaEye } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import RedInput from '../../components/inputs/RedInput'
import RedLink from '../../components/links/RedLink'
import RedButton from '../../components/buttons/RedButton'
import ContainerCard from '../../components/cards/ContainerCard'

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
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Sign In</h1>
      <form onSubmit={onSubmit} className='mt-6 text-xl'>
        <div className='mb-2'>
          <label htmlFor='email' className='block'>
            Email
          </label>
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
        <p className='text-center'>
          <RedLink to='/forgot-password'>Forgot Password ?</RedLink>
        </p>

        <RedButton type='submit' className='w-full tracking-wider mt-6'>
          Sign In
        </RedButton>
      </form>

      <p className='mt-6 text-center'>
        <p>Don't have an account ?</p>
        <RedLink to='/sign-up'>Sign Up</RedLink>
      </p>

      <p className='mt-6 flex flex-col items-center'>
        <p>Or sign in with Google instead</p>
        <FcGoogle className='p-1 bg-white rounded-lg w-8 h-8 hover:cursor-pointer hover:bg-slate-200 duration-100' />
      </p>
    </ContainerCard>
  )
}

export default SignIn
