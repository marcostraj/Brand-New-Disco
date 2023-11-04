import './SecondSection.css'
import Vinil1 from '../../../assets/images/Happier than Ever.png'
import Vinil2 from '../../../assets/images/Evermore.png'
import Vinil3 from '../../../assets/images/This is Why.png'
import Vinil4 from '../../../assets/images/Blue banisters.png'
import Vinil5 from '../../../assets/images/Haim.png'
import Vinil6 from '../../../assets/images/The Idler.png'
import Vinil7 from '../../../assets/images/If i cant have love.png'
import Vinil8 from '../../../assets/images/The Loneliest Time.png'
import Vinil9 from '../../../assets/images/Bewithced.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Vinil1, Vinil2, Vinil3, Vinil4, Vinil5, Vinil6, Vinil7, Vinil8, Vinil9];

function SecondSection() {

  return (
    <>
      <div className='container-section'>
        <div className='title-section'>
        <h1 className='title-vinis'>VINIS EM</h1>
        <h2 className='destaque'>Destaque</h2>
        </div>
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
          pagination={false}
          loop={true}
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

export default SecondSection