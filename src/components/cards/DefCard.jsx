import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RingCard from './RingCard'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css'

SwiperCore.use([EffectCoverflow, Pagination])

function DefCard({ images, items, slidesPer, title }) {
  return (
    <RingCard title={title}>
      <Swiper
        className='ml-10 sm:ml-32'
        effect='coverflow'
        centeredSlides={true}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 50,
          stretch: 50,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {images ? (
              <div className='text-white w-52 sm:w-72 h-40 sm:h-52 border-2 border-yellow-300 rounded-lg'>
                <img
                  className='w-full h-full rounded-lg'
                  src={item.image}
                  alt={item.name}
                />
              </div>
            ) : (
              <div className='flex flex-col justify-between items-center text-white p-4 w-72 h-52 border-2 border-yellow-300 rounded-lg'>
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
