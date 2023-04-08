import DefCard from '../../components/cards/DefCard'
import { sandwiches } from '../../assets/menu/sandwiches'

function Home() {
  const images = sandwiches

  const carouselItems1 = [
    {
      id: '435Menu',
      name: 'Cardápio',
      description: 'Clique aqui para ir para a página do cardápio!',
    },
    {
      id: '435ContactUs',
      name: 'Contato',
      description: 'Clique aqui para ir para a página do cardápio!',
    },
    {
      id: '435AboutUs',
      name: 'Sobre',
      description: 'Clique aqui para ir para a página do cardápio!',
    },
  ]

  const carouselItems2 = [
    {
      id: '435MenuExplanation',
      name: 'Explicação e histórico do menu',
      description: 'Curioso? Clique aqui para ver mais sobre nosso cardápio!',
    },
  ]

  return (
    <>
      <DefCard items={images} slidesPer={2.5} images={true} title='Lanches' />
      <DefCard
        items={carouselItems1}
        slidesPer={2.5}
        images={false}
        title='Paginas'
      />
      <DefCard
        items={carouselItems2}
        slidesPer={1}
        images={false}
        title='Explicaçao'
      />
    </>
  )
}

export default Home
