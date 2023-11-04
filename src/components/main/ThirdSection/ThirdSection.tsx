import './ThirdSection.css'
import Lush from '../../../assets/images/Lush.png'
import Retired from '../../../assets/images/Retired.png'
import Bury from '../../../assets/images/Bury Me.png'
import Puberty from '../../../assets/images/Puberty 2.png'
import Cowboy from '../../../assets/images/Be the Cowboy.png'
import Laurel from '../../../assets/images/Laurel Hell.png'
import Land from '../../../assets/images/The Land.png'
import Mitski from '../../../assets/images/main mitski.png'
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
        <div className='cont'>
          <div className='cont2'>
          <h1 className='title-third-section'>Mitski</h1>
          <h2 className='subtitle-third-section'>DISCOGRAFIA</h2>
          </div>
          <div>
          <img className="mitski2" src={Mitski} alt="" />
          </div>
        </div>
        <div className='swiper'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={6}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          pagination={false}
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