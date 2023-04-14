import { useState } from 'react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import PicsCard from './PicsCard'
import RingCard from './RingCard'
import 'swiper/swiper.css'

SwiperCore.use([EffectCoverflow])

function DefCard({ images, items, title }) {
  const [activeIndex, setActiveIndex] = useState(null)

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

  const onHoverStart = (index) => () => {
    setActiveIndex(index)
  }
  const onHoverEnd = () => {
    setActiveIndex(null)
  }

  return (
    <RingCard title={title}>
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
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            {images ? (
              <div className='w-60 sm:w-80 h-48 sm:h-56 flex flex-col items-center text-white rounded-lg border-2 border-yellow-300'>
                <img
                  onClick={onHoverStart(index)}
                  className={
                    (activeIndex === index ? 'hidden fade-out' : 'fade-in') +
                    ' w-full h-full rounded-md hover:cursor-pointer'
                  }
                  src={item.image}
                  alt={item.name}
                />
                <PicsCard
                  name={item.name}
                  popup1={item.popup1}
                  popup2={item.popup2}
                  popup3={item.popup3}
                  onClick={onHoverEnd}
                  className={
                    activeIndex === index ? 'fade-in' : 'hidden fade-out'
                  }
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
                {/* <div
                  className='tooltip tooltip-warning'
                  data-tip='Imagens do Shawarma'>
                  <label
                    htmlFor='imgModal'
                    className='px-2 mt-1 text-center rounded-lg hover:bg-red-600 hover:cursor-pointer duration-150'>
                    Ver Mais
                  </label>
                </div>
                <input type='checkbox' id='imgModal' className='modal-toggle' />
                <div className='modal bg-red-700'>
                  <div className='modal-box bg-red-700 flex flex-col items-center'>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Dolorem consequatur animi nesciunt neque accusamus libero
                      eveniet nihil ut soluta labore? Magnam, sint iste? Debitis
                      illo explicabo sapiente expedita nemo commodi alias
                      reprehenderit, quam cum consequatur illum earum magni
                    </p>
                    <div className='modal-action flex justify-center'>
                      <label
                        htmlFor='imgModal'
                        className='px-2 mt-1 text-center rounded-lg hover:bg-red-600 hover:cursor-pointer duration-150'>
                        Fechar
                      </label>
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </RingCard>
  )
}

export default DefCard
