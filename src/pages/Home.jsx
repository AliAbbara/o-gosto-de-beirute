import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/swiper-bundle.css'

function Home() {
  const images = [
    {
      descr: '',
      alt: 'carne picante',
      src: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FcarnePicante.jpg?alt=media&token=d294b846-39cb-4193-8cd2-61d3114d9631',
    },
    {
      descr: '',
      alt: 'shawarma carne',
      src: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FSC-Open.jpg?alt=media&token=df376190-4b04-4ab8-9856-11a1a08a9b32',
    },
    {
      descr: '',
      alt: 'shawarma frango',
      src: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FSFs-Open.jpg?alt=media&token=0de0933a-a2c6-4ae7-b34d-4ba9135fc052',
    },
    {
      descr: '',
      alt: 'fajita carne',
      src: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2FfajitaCarne.jpg?alt=media&token=2fe2b2df-77d3-4d87-80de-3a39f38b0f76',
    },
    {
      descr: '',
      alt: 'falafel',
      src: 'https://firebasestorage.googleapis.com/v0/b/o-gosto-de-beirute.appspot.com/o/imagesGeneral%2Ffalafel.jpg?alt=media&token=68833dc0-6a63-40b5-ab93-dc7928d49833',
    },
  ]

  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#b91c1c',
          '--swiper-navigation-color': '#b91c1c',
        }}
        className='h-96'
        modules={[Navigation, Pagination, A11y]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img className='block w-full h-full' src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Home
