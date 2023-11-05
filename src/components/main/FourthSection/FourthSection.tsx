import './FourthSection.css'
import Tidal from '../../../assets/images/Tidal.png'
import Pawn from '../../../assets/images/When The Pawn.png'
import Machine from '../../../assets/images/Machine.png'
import Idler from '../../../assets/images/The Idler (1).png'
import Fetch from '../../../assets/images/Fetch.png'
import Fiona from '../../../assets/images/Fiona Apple.png'
import Retangulo from '../../../assets/images/RetanguloBrown.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Machine, Idler, Fetch, Tidal, Pawn];

function FourthSection() {

  return (
    <>
      <div className='container-fourth-section'>
        <div className='container-retangulo'>
        <img className='retangulo' src={Retangulo} alt="" />
        </div>
        <div className='top-section'>
          <div className='cont-novo'>
            <div className='cont3'>
            <h1 className='title-fiona'>Fiona Apple</h1>
            <h2 className='discografia'>DISCOGRAFIA</h2>
            </div>
            <div className='container-fiona'>
            <img className='fiona' src={Fiona} alt="" />
            </div>
          </div>
        </div>
        <div className='swiper-fourth-section'>
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

export default FourthSection