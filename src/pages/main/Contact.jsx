import { useState } from 'react'
import RingCard from '../../components/cards/RingCard'
import RedInput from '../../components/inputs/RedInput'
import RedTextarea from '../../components/inputs/RedTextarea'
import RedButton from '../../components/buttons/RedButton'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
    message: '',
  })
  const { name, email, about, message } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <RingCard title={'Contato'} className='w-fit m-auto'>
      <div className='flex flex-col'>
        {/* Links and Contact Info */}
        <div className='flex flex-col text-center'>
          <p>Email: ogostodebeirute@gmail.com</p>
          <p>Telephone: +55(17)-99662-0999</p>
          <p>Instagram: @ogostodebeirute</p>
        </div>
        {/* Name Email and About */}
        <div>
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
            <label className='block'>Sobre</label>
            <RedInput
              type='text'
              placeholder='O Motivo da Mensagem'
              id='about'
              value={about}
              onChange={onChange}
            />
          </div>
        </div>
        {/* Message and Button */}
        <div>
          <label>Mensagem</label>
          <RedTextarea
            className='h-36'
            type='name'
            placeholder='Mensagem'
            id='message'
            value={message}
            onChange={onChange}
          />
          <a
            href={`mailto:ogostodebeirute@gmail.com?Subject=${about}&body=${message}`}>
            <RedButton className='mt-2 w-full'>Mandar Mensagem</RedButton>
          </a>
        </div>
      </div>
    </RingCard>
  )
}

export default Contact
