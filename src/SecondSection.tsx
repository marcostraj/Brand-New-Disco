import './SecondSection.css'
import Fundo from './images/background-header.png'
import Fundo2 from './images/background-header2.png'
import Fundo3 from './images/background-header3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'

const slides = [Fundo, Fundo2, Fundo3];

function SecondSection() {

  return (
    <>
      <div className='container-section'>
        <h1>OLÁ</h1>
        <Swiper
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="slide"
          slidesPerView={1}
        >
          {slides.map((item) => (
            <SwiperSlide className="card">
              <img src={item} alt="texto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SecondSection