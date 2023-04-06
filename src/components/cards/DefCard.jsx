import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css'
// import { useNavigate } from 'react-router-dom'
import circleLogo from '../../assets//imgs/circleLogo.png'

SwiperCore.use([EffectCoverflow, Pagination])

function DefCard({ images, items, slidesPer }) {
  // const navigate = useNavigate()
  return (
    <div className='relative mt-24 h-72 flex items-center bg-red-700 rounded-lg shadow-2xl shadow-black border-2 border-yellow-400 mb-2 ml-20'>
      <div className='absolute -top-20 -left-20 w-40'>
        <img src={circleLogo} alt='logo' />
      </div>
      <Swiper
        className='h-auto'
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPer}
        coverflowEffect={{
          rotate: 45,
          stretch: 45,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {images ? (
              <div className='text-white w-72 h-52 border-2 border-yellow-400 rounded-lg'>
                <img
                  className='w-full h-full rounded-lg'
                  src={item.image}
                  alt={item.name}
                />
              </div>
            ) : (
              <div className='flex flex-col justify-between items-center text-white p-4 w-72 h-52 border-2 border-yellow-400 rounded-lg'>
                <div>{item.name}</div>
                <div>{item.description}</div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DefCard
