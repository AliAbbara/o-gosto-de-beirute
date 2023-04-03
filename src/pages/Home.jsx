import DefCard from '../components/cards/DefCard'
import { sandwiches } from './../assets/sandwiches'

function Home() {
  const images = sandwiches

  const carouselItems1 = [
    {
      id: '435Menu',
      name: 'Menu',
      description: 'Click here to go to the menu page!',
    },
    {
      id: '435ContactUs',
      name: 'Contact Us',
      description: 'Click here to go to the menu page!',
    },
    {
      id: '435AboutUs',
      name: 'About Us',
      description: 'Click here to go to the menu page!',
    },
  ]

  const carouselItems2 = [
    {
      id: '435MenuExplanation',
      name: 'Menu Explanation and History',
      description: 'Curious? Click here to see more about our menu!',
    },
  ]

  return (
    <>
      <DefCard items={images} slidesPer={2.5} images={true} />
      <DefCard items={carouselItems1} slidesPer={2.5} images={false} />
      <DefCard items={carouselItems2} slidesPer={1} images={false} />
    </>
  )
}

export default Home
