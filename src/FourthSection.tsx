import './FourthSection.css'
import Tidal from './images/Tidal.png'
import Pawn from './images/When The Pawn.png'
import Machine from './images/Machine.png'
import Idler from './images/The Idler (1).png'
import Fetch from './images/Fetch.png'
import Fiona from './images/Fiona Apple.png'
import Retangulo from './images/RetanguloBrown.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Tidal, Pawn, Machine, Idler, Fetch];

function FourthSection() {

  return (
    <>
      <div className='container-fourth-section'>
        <div className='container-retangulo'>
        <img className='retangulo' src={Retangulo} alt="" />
        </div>
        <div className='top-section'>
        </div>
        <div className='title-fourth-section'>
        <h1 className='title-fiona'>Fiona Apple</h1>
        <h2 className='discografia'>DISCOGRAFIA</h2>
        </div>
        <div className='container-fiona'>
        <img className='fiona' src={Fiona} alt="" />
        </div>
        <div className='swiper-fourth-section'>
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

export default FourthSection