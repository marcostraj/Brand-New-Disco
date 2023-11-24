import './Loja.css'
import Vinil1 from '../../assets/images/Happier than Ever.png'
import Vinil2 from '../../assets/images/Evermore.png'
import Vinil3 from '../../assets/images/This is Why.png'
import Vinil4 from '../../assets/images/Blue banisters.png'
import Vinil5 from '../../assets/images/Haim.png'
import Vinil6 from '../../assets/images/The Idler.png'
import Vinil7 from '../../assets/images/If i cant have love.png'
import Vinil8 from '../../assets/images/The Loneliest Time.png'
import Vinil9 from '../../assets/images/Bewithced.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Vinil20 from '..//../assets/images/Brand new Eyes.png'
import Vinil21 from '..//../assets/images/Garden.png'
import Vinil22 from '..//../assets/images/Melodrama.png'
import Vinil23 from '..//../assets/images/Titanic.png'
import Vinil24 from '..//../assets/images/Blue weekend.png'
import Vinil25 from '..//../assets/images/Norman.png'
import Vinil26 from '..//../assets/images/Puberty 2.png'
import Vinil27 from '..//../assets/images/Zeros.png'
import Vinil28 from '..//../assets/images/Bury Me.png'

const slides = [Vinil1, Vinil2, Vinil3, Vinil4, Vinil5, Vinil6, Vinil7, Vinil8, Vinil9];
const slides2 = [Vinil20, Vinil21, Vinil22, Vinil23, Vinil24, Vinil25, Vinil26, Vinil27, Vinil28];

function Loja() {

  return (
    <>
      <div className='container-loja'>
      <div className="container-head-loja">
        <div className="navbar-loja">
            <h1 className="nav-title-loja">VINIS</h1>
            <div>
              <ul className="menu-loja">
                <li className="menu-item-loja">Sobre nós</li>
                <li className="menu-item-loja">Loja</li>
                <li className="menu-item-loja">Contato</li>
              </ul>
            </div>
        </div>
      </div>
      <div className='input-div'>
        <input className='input-busca-loja' placeholder='Pesquise' type="text" />
      </div>
      <div className='destaque-loja'>
        <h2 className='destaque-titulo'>Destaques</h2>
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
      <div className='destaque-loja'>
      <h2 className='destaque-titulo'>Sugestões</h2>
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
            {slides2.map((item) => (
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

export default Loja