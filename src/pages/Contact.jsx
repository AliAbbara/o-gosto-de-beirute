import ContainerCard from '../components/cards/ContainerCard'

function Contact() {
  return (
    <ContainerCard>
      <h1 className='text-3xl text-center'>Contact</h1>
      <div>
        <p>Contact: </p>
        <p>Email: ogostodebeirute@gmail.com</p>
        <p>Telephone: +55(17)-99662-0999</p>
        <p>Instagram: @ogostodebeirute</p>
      </div>
      <div>
        <p>Address: </p>
        <p>Barretos, Sao Paulo, Brazil</p>
        <p>Avenida 26, com a Rua 26</p>
        <p>Numero 579 -------------</p>
      </div>
    </ContainerCard>
  )
}

export default Contact
