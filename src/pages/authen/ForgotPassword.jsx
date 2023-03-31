import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import ContainerCard from '../../components/cards/ContainerCard'
import RedButton from '../../components/buttons/RedButton'
import RedLink from '../../components/links/RedLink'
import RedInput from '../../components/inputs/RedInput'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  // ---------------------onChange------------------
  const onChange = (e) => setEmail(e.target.value)
  // -----------------------------------------------

  // ---------------------onSubmit------------------
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('The password reset link was sent!')
      setTimeout(navigate('/'), 1000)
    } catch (error) {
      toast.error('Something went wrong, please check for a correct email!')
    }
  }
  // -----------------------------------------------

  return (
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Password Reset</h1>
      <form onSubmit={onSubmit} className='mt-6 text-xl'>
        <div>
          <label className='block'>Email</label>
          <RedInput
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <RedButton type='submit' className='w-full tracking-wider mt-6'>
          Send Reset Link
        </RedButton>
      </form>

      <p className='mt-6 text-center'>
        <RedLink to='/sign-in'>Back to the sign in page</RedLink>
      </p>
    </ContainerCard>
  )
}

export default ForgotPassword
