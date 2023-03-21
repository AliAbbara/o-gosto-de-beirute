import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/swiper-bundle.css'
import CPinHalf from '../imgs/CPinHalf.jpg'
import CPinHalfwFries from '../imgs/CPinHalfwFries.jpg'
import inHalfsFries from '../imgs/inHalfsFries.jpg'
import scOpen from '../imgs/scOpen.jpg'
import sfsOpen from '../imgs/sfsOpen.jpg'

function Home() {
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
        <SwiperSlide>
          <img
            className='block w-full h-full'
            src={CPinHalf}
            alt='cp in half'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='block w-full h-full'
            src={CPinHalfwFries}
            alt='cp in half with fries'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='block w-full h-full'
            src={inHalfsFries}
            alt='in halfs and fries'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className='block w-full h-full' src={scOpen} alt='sc open' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='block w-full h-full' src={sfsOpen} alt='sfs open' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
