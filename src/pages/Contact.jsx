import ContainerCard from '../components/cards/ContainerCard'
import RingCard from '../components/cards/RingCard'

function Contact() {
  return (
    <RingCard title={'Contato'}>
      <div className='flex flex-wrap'>
        <div>
          {' '}
          <p>Email: ogostodebeirute@gmail.com</p>
          <p>Telephone: +55(17)-99662-0999</p>
          <p>Instagram: @ogostodebeirute</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </RingCard>
  )
}

export default Contact
