import './ThirdSection.css'
import Lush from './images/Lush.png'
import Retired from './images/Retired.png'
import Bury from './images/Bury Me.png'
import Puberty from './images/Puberty 2.png'
import Cowboy from './images/Be the Cowboy.png'
import Laurel from './images/Laurel Hell.png'
import Land from './images/The Land.png'
import Mitski from './images/main mitski.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Lush, Retired, Bury, Puberty, Cowboy, Laurel, Land];

function ThirdSection() {

  return (
    <>
      <div className='container-third-section'>
        <div className='section-top'>
        <div className='title'>
        <h1 className='title-third-section'>Mitski</h1>
        <h2 className='subtitle-third-section'>DISCOGRAFIA</h2>
        </div>
        <img className="mitski" src={Mitski} alt="" />
        </div>
        <div className='swiper'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="slide"
        >
          {slides.map((item) => (
            <SwiperSlide className="card">
              <img className='card-img' src={item} alt="texto" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  )
}

export default ThirdSection