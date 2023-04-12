import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RingCard from './RingCard'
import 'swiper/swiper.css'

SwiperCore.use([EffectCoverflow, Pagination])

function DefCard({ images, items, title }) {
  // const [showPics, setShowPics] = useState(true)

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

  // const onStartHover = () => {
  //   setShowPics(true)
  // }
  // const onEndHover = () => {
  //   setTimeout(() => setShowPics(false), 280)
  // }

  return (
    <RingCard title={title}>
      <Swiper
        className='ml-10 h-48 sm:h-60 overflow-y-visible'
        effect={'coverflow'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition: false,
        }}
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
                // onMouseEnter={onStartHover}
                // onMouseLeave={onEndHover}
                className='w-52 sm:w-72 h-40 sm:h-52 flex flex-col items-center text-white rounded-lg border-2 border-yellow-300'>
                {/* <PicsCard
                  className={showPics ? 'block' : 'hidden'}
                  key={123123123}
                /> */}
                <img
                  className='w-full h-full rounded-md'
                  src={item.image}
                  alt={item.name}
                />
                <p className='text-center'>{item.name}</p>
              </div>
            ) : (
              <div className='p-4 w-52 sm:w-72 h-40 sm:h-52 flex flex-col justify-between items-center text-white rounded-lg border-2 border-yellow-300'>
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
