import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase.config'
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
      await sendPasswordResetEmail(auth, email)
      toast.success('O link de redefinição de senha foi enviado!')
      setTimeout(navigate('/'), 1000)
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado, verifique se o e-mail está correto!')
    }
  }
  // -----------------------------------------------

  return (
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Redefinição de Senha</h1>
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
          Mandar Link de Redefinição
        </RedButton>
      </form>

      <p className='mt-6 text-center'>
        <RedLink to='/sign-in'>Voltar a Pagina de Login</RedLink>
      </p>
    </ContainerCard>
  )
}

export default ForgotPassword
