import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css'
// import { useNavigate } from 'react-router-dom'
import circleLogo from '../../assets//imgs/circleLogo.png'
import RingCard from './RingCard'

SwiperCore.use([EffectCoverflow, Pagination])

function DefCard({ images, items, slidesPer, title }) {
  // const navigate = useNavigate()
  return (
    <RingCard title={title}>
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
    </RingCard>
  )
}

export default DefCard
