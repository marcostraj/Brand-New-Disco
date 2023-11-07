import './SeventhSection.css'
import Lana from '../../../assets/images/Lana.png'
import Lorde from '../../../assets/images/Lorde.png'
import Billie from '../../../assets/images/Billie (1).png'
import Florence from '../../../assets/images/Florence.png'
import Alex from '../../../assets/images/Alex.png'
import Vincent from '../../../assets/images/St vincent.png'
import SZA from '../../../assets/images/Sza.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Lorde, Billie, SZA, Florence, Alex, Vincent, Lana];

function SeventhSection() {

  return (
    <>
      <div className='container-seventh-section'>
          <div>
          <h1 className='title-seventh-section'>Coleções</h1>
          </div>
        <div className='swiper'>
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
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
          className="slide-colecoes"
        >
          {slides.map((item) => (
            <SwiperSlide className="card-seventh-section">
              <img className='card-img-seventh' src={item} alt="texto" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <h2 className='title-down'>SEUS ARTISTAS FAVORITOS EM UM SÓ LUGAR</h2>
      </div>
    </>
  )
}

export default SeventhSection