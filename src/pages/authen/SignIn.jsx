import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
import RedInput from '../../components/inputs/RedInput'
import RedLink from '../../components/links/RedLink'
import RedButton from '../../components/buttons/RedButton'
import ContainerCard from '../../components/cards/ContainerCard'
import OAuth from '../../components/other/OAuth'

function SignIn({ setLoading }) {
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
    setLoading(true)
    if (email === '' || password === '') {
      toast.warning('Por favor, preencha todos os campos!')
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        if (userCredential.user) {
          navigate('/')
          toast.success('Conectado com sucesso!')
        }
      } catch (error) {
        toast.error('E-mail ou senha incorretos!')
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
    //eslint-disable-next-line
  }, [])

  return (
    <ContainerCard className='m-auto max-w-screen-sm relative z-10 flex flex-col justify-center'>
      <h1 className='text-center text-3xl'>Login</h1>
      <form onSubmit={onSubmit} className='mt-6 text-xl'>
        <div className='mb-2'>
          <label htmlFor='email' className='block'>
            Email
          </label>
          <RedInput
            type='email'
            autoComplete='on'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='mb-2'>
          <label className='flex items-center'>
            Senha
            <FaEye
              onClick={() => setPasswordVisible(!passwordVisible)}
              className='ml-2 hover:cursor-pointer'
            />
          </label>
          <RedInput
            type={passwordVisible ? 'name' : 'password'}
            autoComplete='on'
            placeholder='Senha'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <p className='text-center'>
          <RedLink to='/forgot-password'>Esqueceu sua senha ?</RedLink>
        </p>

        <RedButton type='submit' className='mt-6 w-full tracking-wider'>
          Login
        </RedButton>
      </form>

      <div className='mt-6 text-center'>
        <p>Não tem uma conta?</p>
        <RedLink to='/sign-up'>Inscrever-se</RedLink>
      </div>

      <div className='mt-6 flex flex-col items-center'>
        <p>Ou faça login com o Google</p>
        <OAuth />
      </div>
    </ContainerCard>
  )
}

export default SignIn
