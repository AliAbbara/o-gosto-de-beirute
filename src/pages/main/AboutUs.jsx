import { useEffect } from 'react'
import RingCard from '../../components/cards/RingCard'

function AboutUs({ setLoading }) {
  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 800)
    //eslint-disable-next-line
  }, [])

  return (
    <RingCard title='Sobre'>
      <div>
        <p>
          Bem-vindo ao O Gosto de Beirute, um restaurante libanês de propriedade
          e administração familiar localizado no Brasil. Nossa jornada começou
          com uma ideia simples, trazer os sabores autênticos da culinária
          libanesa e do Oriente Médio para a comunidade local.
        </p>
        <p>
          Nossa história começa onde a maioria dos membros da família aprimorou
          suas habilidades trabalhando em vários restaurantes ao redor do mundo.
          Eles eram apaixonados pela culinária de sua terra natal e queriam
          compartilhá-la com outras pessoas. Eles desenterraram o antigo livro
          de receitas da família e começaram a experimentar pratos tradicionais
          libaneses.
        </p>
        <p>
          Inicialmente, começamos como um humilde food truck com recursos
          limitados. No entanto, nossa comida rapidamente ganhou popularidade e
          recebemos muito amor e apoio de nossa comunidade. Após dois anos de
          muito trabalho e dedicação, abrimos nosso primeiro restaurante, que
          desde então tem sido um sucesso.
        </p>
        <p>
          Orgulhamo-nos do facto de o nosso restaurante ser totalmente
          controlado pela família. Da cozinha à frente da casa, todos os
          aspectos do negócio são gerenciados por nossos familiares. Acreditamos
          que esse toque pessoal é o que torna nossa comida e serviço únicos.
        </p>
        <p>
          No O Gosto de Beirute, oferecemos uma grande variedade de pratos
          autênticos libaneses e do Oriente Médio, preparados com ingredientes
          frescos e receitas tradicionais. Nossos shawarmas são feitos com
          frango marinado, carne ou cordeiro e cozidos lentamente em uma
          churrasqueira vertical para criar uma carne macia e saborosa que é
          então embrulhada em pão sírio recém-assado. Nossas fajitas são feitas
          à maneira libanesa, com suculentos cortes de carne bovina, frango ou
          cordeiro, grelhados na perfeição e servidos com legumes frescos e
          molhos. e o Falafel original, feito com uma mistura de grão-de-bico,
          ervas e especiarias, depois frito até ficar crocante.
        </p>
        <p>
          We take pride in using only the freshest and highest quality
          ingredients in our dishes. We believe that the secret to delicious
          food is in the details, and we pay attention to every aspect of our
          dishes, from the seasoning to the cooking method, to ensure that every
          bite is bursting with flavor.
        </p>
        <p>
          Whether you're a fan of Middle Eastern cuisine or trying it for the
          first time, we promise to take you on a culinary journey through the
          flavors and aromas of Lebanon and the Middle East.
        </p>
        <p>
          We hope to see you soon at our restaurant, where you can experience
          the taste of Lebanon and the Middle East right here in Brazil.
        </p>
      </div>
    </RingCard>
  )
}

export default AboutUs
