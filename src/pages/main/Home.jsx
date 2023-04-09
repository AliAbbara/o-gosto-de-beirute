import { useEffect } from 'react'
import { sandwiches } from '../../assets/menu/sandwiches'
import DefCard from '../../components/cards/SwiperCard'

function Home({ setLoading }) {
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

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <DefCard items={images} images={true} title='Lanches' />
      <DefCard items={carouselItems1} images={false} title='Paginas' />
      <DefCard items={carouselItems2} images={false} title='Explicaçao' />
    </>
  )
}

export default Home
