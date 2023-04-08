import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
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
import OAuth from '../../components/other/OAuth'

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
      toast.warning('Por favor, preencha todos os campos!')
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
          'Inscrito com sucesso, certifique-se de verificar seu endereço de e-mail!'
        )
      } catch (error) {
        toast.error(
          'Algo deu errado! Verifique se o e-mail está correto ou se há uma conta já existente.'
        )
      }
    }
  }

  return (
    <ContainerCard className='max-w-screen-sm flex flex-col justify-center m-auto'>
      <h1 className='text-3xl text-center'>Inscrever-se</h1>
      <form onSubmit={onSubmit} className='mt-6 text-xl'>
        <div className='mb-2'>
          <label className='block'>Nome</label>
          <RedInput
            type='name'
            placeholder='Nome'
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
            Senha
            <FaEye
              onClick={() => setPasswordVisible(!passwordVisible)}
              className='ml-2 hover:cursor-pointer'
            />
          </label>
          <RedInput
            type={passwordVisible ? 'name' : 'password'}
            autoComplete='off'
            placeholder='Senha'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>

        <RedButton type='submit' className='w-full tracking-wider mt-6'>
          Inscrever-se
        </RedButton>
      </form>

      <div className='mt-6 text-center'>
        <p>Já tem uma conta ?</p>
        <RedLink to='/sign-in'>Login</RedLink>
      </div>

      <div className='mt-6 flex flex-col items-center'>
        <p>Ou inscreva-se com o Google</p>
        <OAuth />
      </div>
    </ContainerCard>
  )
}

export default SignUp
