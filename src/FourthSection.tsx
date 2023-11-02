import './FourthSection.css'
import Vinil1 from './images/Happier than Ever.png'
import Vinil2 from './images/Evermore.png'
import Vinil3 from './images/This is Why.png'
import Vinil4 from './images/Blue banisters.png'
import Vinil5 from './images/Haim.png'
import Vinil6 from './images/The Idler.png'
import Vinil7 from './images/If i cant have love.png'
import Vinil8 from './images/The Loneliest Time.png'
import Vinil9 from './images/Bewithced.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Vinil1, Vinil2, Vinil3, Vinil4, Vinil5, Vinil6, Vinil7, Vinil8, Vinil9];

function FourthSection() {

  return (
    <>
      <div className='container-fourth-section'>
        <div className='title-section'>
        <h1 className='title-vinis'>VINIS EM</h1>
        <h2 className='destaque'>Destaque</h2>
        </div>
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
    </>
  )
}

export default FourthSection