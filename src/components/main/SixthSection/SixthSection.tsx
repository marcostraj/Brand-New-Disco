import './SixthSection.css'
import Midnights from '../../../assets/images/Midnights2.png'
import Nostalgia from '../../../assets/images/FutureNostalgia.png'
import Swetenner from '../../../assets/images/Swetenner.png'
import Desire from '../../../assets/images/Caroline.png'
import Sleep from '../../../assets/images/Billie.png'
import Bangerz from '../../../assets/images/Bangerz.png'
import Confesions from '../../../assets/images/Confesions.png'
import Dangerous from '../../../assets/images/Dangerous.png'
import Renaissance from '../../../assets/images/Beyonce.png'
import Teenage from '../../../assets/images/Teenage.png'
import Fame from '../../../assets/images/The Fame.png'
import Anti from '../../../assets/images/ANTI.png'
import Badland from '../../../assets/images/Badland.png'
import Lover from '../../../assets/images/Lover.png'
import Melodrama from '../../../assets/images/Melodrama (1).png'
import Wonder from '../../../assets/images/Wonder.png'
import Hours from '../../../assets/images/After Hours.png'
import Romance from '../../../assets/images/Romance.png'
import Dua from '../../../assets/images/Dua lipa.png'
import Taylor from '../../../assets/images/Taylor.png'
import Ariana from '../../../assets/images/Ariana3.jpg'
import Beyonce from '../../../assets/images/Beyoncepop.png'
import Divas from '../../../assets/images/Divas.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [Midnights, Nostalgia, Swetenner, Desire, Sleep, Wonder, Confesions, Dangerous, Renaissance, Romance, Hours, Anti, Badland, Lover, Fame, Bangerz, Melodrama, Teenage];

function SixthSection() {

  return (
    <>
      <div className='container-sixth-section'>
      <div className='container-title'>
        <h2 className='title-pop'>Pop on</h2>
        <h2 className='title-pop'>Top</h2>
      </div>
        <div className='cont-sixth-section'>
        <div className='images-sixth-section'>
            <img className='taylor' src={Divas} alt="" />
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