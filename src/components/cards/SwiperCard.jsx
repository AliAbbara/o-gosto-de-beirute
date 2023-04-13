import { useState } from 'react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Tooltip } from 'daisyui'
import RingCard from './RingCard'
import 'swiper/swiper.css'

SwiperCore.use([EffectCoverflow])

function DefCard({ images, items, title }) {
  const [showDesc, setShowDesc] = useState(false)
  const [active, setActive] = useState(null)

  const slidesPerViewDesktop2 = 3.5
  const slidesPerViewDesktop = 2.5
  const slidesPerViewTablet = 2
  const slidesPerViewPhone = 1.2

  const breakpoints = {
    1300: {
      slidesPerView: slidesPerViewDesktop2,
    },
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
    <RingCard title={title} className='overflow-y-visible'>
      <Swiper
        className='h-56 sm:h-64'
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        breakpoints={breakpoints}
        coverflowEffect={{
          rotate: 10,
          stretch: 70,
          slideShadows: false,
        }}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            {images ? (
              <div
                // onMouseOver={onStartHover}
                // onMouseOut={onEndHover}
                className='w-60 sm:w-80 h-48 sm:h-56 flex flex-col items-center text-white rounded-lg border-2 border-yellow-300'>
                {/* <PicsCard
                  className={showPics ? 'block' : 'hidden'}
                  key={123123123}
                /> */}
                <img
                  className='w-full h-full rounded-md'
                  src={item.image}
                  alt={item.name}
                />
                <div
                  className='tooltip tooltip-warning before:w-[15rem]'
                  data-tip={item.ingredients}>
                  <button className='px-2 mt-1 text-center rounded-lg hover:bg-red-600 duration-150'>
                    {item.name}
                  </button>
                </div>
              </div>
            ) : (
              <div className='p-2 w-68 sm:w-80 h-52 sm:h-56 flex flex-col justify-evenly items-center rounded-lg bg-red-700 border-2 border-yellow-300'>
                <div className='mb-2 text-xl font-semibold'>{item.name}</div>
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
