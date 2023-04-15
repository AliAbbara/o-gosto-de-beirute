import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase.config'
import ContainerCard from '../../components/cards/ContainerCard'
import RedButton from '../../components/buttons/RedButton'
import RedLink from '../../components/links/RedLink'
import RedInput from '../../components/inputs/RedInput'

function ForgotPassword({ setLoading }) {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('O link de redefinição de senha foi enviado!')
      setTimeout(navigate('/'), 1000)
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado, verifique se o e-mail está correto!')
    }
    setLoading(true)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
    //eslint-disable-next-line
  }, [])

  return (
    <ContainerCard className='m-auto max-w-screen-sm relative z-10 flex flex-col justify-center'>
      <h1 className='text-center text-3xl'>Redefinição de Senha</h1>
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
        <RedButton type='submit' className='mt-6 w-full tracking-wider'>
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
