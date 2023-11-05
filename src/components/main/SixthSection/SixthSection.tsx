import './SixthSection.css'
import Midnights from '../../../assets/images/Midnights.png'
import Plastic from '../../../assets/images/Plastic hearts.png'
import Rosalia from '../../../assets/images/Rosalia.png'
import Desire from '../../../assets/images/Caroline.png'
import Dua from '../../../assets/images/Component 13.png'
import Miley from '../../../assets/images/Miley.png'
import Beyonce from '../../../assets/images/Beyonce.png'
import Taylor from '../../../assets/images/Taylor.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Midnights, Plastic, Desire, Dua, Rosalia, Beyonce, Plastic];

function SixthSection() {

  return (
    <>
      <div className='container-sixth-section'>
      <div className='container-title'>
        <h1 className='title-pop'>Pop on <br></br>Top</h1>
      </div>
        <div className='cont-sixth-section'>
        <div className='images-sixth-section'>
            <div><img className='taylor' src={Taylor} alt="Cage" /></div>
            <div className='cont-miley'><img  className='miley' src={Miley} alt="" /></div>
        </div>
        <Swiper
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
            <SwiperSlide className="slides-sixth">
              <img className='slide-sixth-section' src={item} alt="texto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </>
  )
}

export default SixthSection