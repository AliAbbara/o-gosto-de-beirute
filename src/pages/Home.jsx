import DefCard from '../components/cards/DefCard'

function Home() {
  const images = [
    {
      key: '435CarnePicante',
      name: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FcarnePicante.jpg?alt=media&token=d294b846-39cb-4193-8cd2-61d3114d9631',
      description: 'Carne Picante',
    },
    {
      key: '435ShawarmaCarne',
      name: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FSC-Open.jpg?alt=media&token=df376190-4b04-4ab8-9856-11a1a08a9b32',
      description: 'Shawarna Carne',
    },
    {
      key: '435ShawarmaFrango',
      name: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FSFs-Open.jpg?alt=media&token=0de0933a-a2c6-4ae7-b34d-4ba9135fc052',
      description: 'Shawarma Frango',
    },
    {
      key: '435FajitaCarne',
      name: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FfajitaCarne.jpg?alt=media&token=2fe2b2df-77d3-4d87-80de-3a39f38b0f76',
      description: 'Fajirta Carne',
    },
    {
      key: '435Falafel',
      name: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2Ffalafel.jpg?alt=media&token=68833dc0-6a63-40b5-ab93-dc7928d49833',
      description: 'Falafel',
    },
  ]

  const carouselItems1 = [
    {
      key: '435Menu',
      name: 'Menu',
      description: 'Click here to go to the menu page!',
    },
    {
      key: '435ContactUs',
      name: 'Contact Us',
      description: 'Click here to go to the menu page!',
    },
    {
      key: '435AboutUs',
      name: 'About Us',
      description: 'Click here to go to the menu page!',
    },
  ]

  const carouselItems2 = [
    {
      key: '435MenuExplanation',
      name: 'Menu Explanation and History',
      description: 'Curious? Click here to see more about our menu!',
    },
  ]

  return (
    <>
      <DefCard items={images} slidesPer={3} images={true} />
      <DefCard items={carouselItems1} slidesPer={3} images={false} />
      <DefCard items={carouselItems2} slidesPer={1} images={false} />
    </>
  )
}

export default Home
