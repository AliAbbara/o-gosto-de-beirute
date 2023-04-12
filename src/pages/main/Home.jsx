import { useEffect } from 'react'
import { sandwiches } from '../../assets/menu/sandwiches'
import DefCard from '../../components/cards/SwiperCard'
import RingCard from '../../components/cards/RingCard'
import ContainerCard from './../../components/cards/ContainerCard'

function Home({ setLoading }) {
  const images = sandwiches
  const carouselItems1 = [
    {
      id: '435Shawarma',
      name: 'Shawarmas',
      description:
        'Nós fornecemos os dois tipos de Shawarma, o de carne bovina e o de frango. Nossos temperos combinam para dar a você o mesmo tempero original do Shawarma.',
    },
    {
      id: '435Fajita',
      name: 'Fajitas',
      description:
        'Em O Gosto de Beirute você encontra dois tipos de Fajitas, feitas à moda libanesa. Os amantes do famoso beirute brasileiro vão adorar a nossa Fajita de Carne.',
    },
    {
      id: '435CarnePicante',
      name: 'O Carne Picante',
      description:
        'Nossa Carne Picante é uma versão modificada do famoso Sujuk libanês. Um sanduíche saboroso, delicioso e picante que vai acabar com sua fome curiosa.',
    },
    {
      id: '435Falafel',
      name: 'Falafel',
      description:
        'O famoso Falafel, feito à moda libanesa, vai agradar aos vegetarianos. Até o molho caseiro Taratour usado é vegano.',
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
      <DefCard items={carouselItems1} images={false} title='Cardápio' />
      <RingCard title='Historias'>
        <ContainerCard className='flex flex-col items-center'>
          <div className='mb-2 text-xl font-semibold'>Shawarma</div>
          <div>
            Shawarma originou-se dos impérios otomanos, que é a Turquia moderna,
            remontando ao século 18. A palavra Shawarma significa rotativo
            (Döner), pois é o pão. Dentro dele vai a carne seja ela de frango ou
            bovina junto com legumes e molhos, que variam entre os dois
            principais tipos de Shawarma. No caso de boivna os legumes consistem
            em tomate, cebola e salsa na maioria dos casos. O seu molho é o
            Taratour. Por outro lado, os vegetais de frango são picles e batatas
            fritas na maioria dos casos. O seu molho é o molho de alho.
          </div>
        </ContainerCard>
        <ContainerCard className='flex flex-col items-center'>
          <div className='mb-2 text-xl font-semibold'>Fajita</div>
          <div>
            As fajitas foram criadas no século 19 por trabalhadores de fazendas
            mexicanas. Começou a ganhar popularidade no final da década de 1960,
            onde era vendido em estandes. Pouco depois, os restaurantes
            começaram a adicionar fajitas em seus cardápios. No momento, existem
            muitas variações de Fajitas dependendo das regiões e países, mas o
            prato original das Fajitas consiste em peito de frango, temperos,
            pimentãos, cebola, limão e azeite, tudo envolto em um pão de
            tortilla.
          </div>
        </ContainerCard>
        <ContainerCard className='flex flex-col items-center'>
          <div className='mb-2 text-xl font-semibold'>
            Carne Picante / Sujuk
          </div>
          <div>
            O prato Sujuk originou-se no Oriente Médio, normalmente feito de
            carne bovina ou de cordeiro. É consumido principalmente no café da
            manhã, onde é feito com ovos, ou usado como cobertura para doces. É
            uma linguiça picante na maioria dos casos, especialmente nos países
            do Oriente Médio. É composto por carne moída seca com alto teor de
            gordura e uma variedade de especiarias. Ao longo dos anos, tem sido
            apreciado de várias maneiras, como churrasco, coberturas de
            pastelaria ou adicionado como carne a outros pratos.
          </div>
        </ContainerCard>
        <ContainerCard className='flex flex-col items-center'>
          <div className='mb-2 text-xl font-semibold'>Falafel</div>
          <div>
            Este incrível prato remonta a cerca de mil anos, onde se originou no
            Oriente Médio como um prato de jejum, pelo facto de ser um prato
            vegetariano à base de grão-de-bico. É servido frito em forma de
            bolas ou rissóis, juntamente com uma variedade de legumes que
            consistem em tomate, couve, alface, salsa e picles, e Taratour como
            um molho. Ele ganhou muita popularidade ao longo dos anos e muitas
            variações podem ser encontradas nele. Hoje em dia o Falafel é feito
            de diversas formas, no Oriente Médio é mais utilizado na forma de
            sanduíche.
          </div>
        </ContainerCard>
      </RingCard>
    </>
  )
}

export default Home
