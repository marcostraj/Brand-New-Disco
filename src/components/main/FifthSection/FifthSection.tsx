import './FifthSection.css'
import Album1 from '../../../assets/images/Pretty.png'
import Album2 from '../../../assets/images/Nightmare.png'
import Album3 from '../../../assets/images/Love.png'
import Album4 from '../../../assets/images/Brand new Eyes.png'
import Album5 from '../../../assets/images/Boygenius.png'
import Album6 from '../../../assets/images/Bury Me.png'
import Album7 from '../../../assets/images/I love you.png'
import Album8 from '../../../assets/images/How big.png'
import Album9 from '../../../assets/images/Blurryface.png'
import Paramore from '../../../assets/images/Paramore.png'
import Elephant from '../../../assets/images/Matt2.png'
import Wolf from '../../../assets/images/Alice.png'
import Boygenius from '../../../assets/images/Julien.png'
import Monkeys from '../../../assets/images/Arctic.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Album1, Album2, Album3, Album4, Album5, Album9, Album6, Album7, Album8];

function FifthSection() {

  return (
    <>
      <div className='container-fifth-section'>
        <div className='images'>
            <div><img className='paramore' src={Paramore} alt="Paramore" /></div>
            <div><img className='cage' src={Elephant} alt="Cage" /></div>
            <div><img className='wolf' src={Wolf} alt="Wolf Alice" /></div>
            <div><img className='boygenius' src={Boygenius} alt="Boygenius" /></div>
            <div><img className='monkeys' src={Monkeys} alt="Arctic Monkeys" /></div>
        </div>
        <div className='title-fifth-section'>
        <h2 className='title-rock'>Rock Crave!</h2>
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
            <SwiperSlide className="slides">
              <img className='slide-fifth-section' src={item} alt="texto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default FifthSection