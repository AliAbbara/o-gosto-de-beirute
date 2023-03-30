import SwiperCore, { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css'
// import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.ico'

SwiperCore.use([Pagination, EffectCoverflow])

function DefCard({ items, slidesPer, images }) {
  // const navigate = useNavigate()
  return (
    <div className='relative mt-20 ml-1'>
      <div className='absolute -top-16'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='flex items-center h-72 bg-red-700 rounded-lg shadow-2xl shadow-black border-2 border-yellow-400 mb-2 ml-20'>
        <Swiper
          className='h-auto'
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPer}
          coverflowEffect={{
            rotate: 30,
            stretch: 20,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}>
          {items.map((item) => (
            <SwiperSlide key={item.key}>
              {images ? (
                <div className='text-white w-72 h-52 border-2 border-yellow-400 rounded-lg'>
                  <img
                    className='w-full h-full rounded-lg'
                    src={item.name}
                    alt={item.key}
                  />
                </div>
              ) : (
                <div className='flex flex-col justify-between items-center text-white p-4 w-60 h-44 border-2 border-yellow-400 rounded-lg'>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default DefCard
