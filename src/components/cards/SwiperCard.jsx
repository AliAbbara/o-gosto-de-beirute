import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RingCard from './RingCard'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css'

SwiperCore.use([EffectCoverflow, Pagination])

function DefCard({ images, items, title }) {
  const slidesPerViewDesktop = 2.5
  const slidesPerViewTablet = 2
  const slidesPerViewPhone = 1.5

  const breakpoints = {
    1024: {
      slidesPerView: slidesPerViewDesktop,
    },
    768: {
      slidesPerView: slidesPerViewTablet,
    },
    320: {
      slidesPerView: slidesPerViewPhone,
    },
  }

  return (
    <RingCard title={title}>
      <Swiper
        className='ml-10 h-48 sm:h-60'
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        breakpoints={breakpoints}
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
                <p className='text-center'>{item.name}</p>
              </div>
            ) : (
              <div className='flex flex-col justify-between items-center text-white p-4 w-52 sm:w-72 h-40 sm:h-52 border-2 border-yellow-300 rounded-lg'>
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