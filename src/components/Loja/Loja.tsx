import './Loja.css'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Billieicon from '../../assets/images/billieicon.png'
import Lanaicon from '../../assets/images/lanaicon.png'
import { slides1, slides2, slides3, slides4, slides5, slides6} from './data'
import { Link } from 'react-router-dom'

function Loja() {

  const [search, setSearch] = React.useState("")
  const searchLowerCase = search.toLocaleLowerCase()
  const slide1 = slides1.filter(item => item.toLocaleLowerCase().includes(searchLowerCase))
  const slide2 = slides2.filter(item => item.toLocaleLowerCase().includes(searchLowerCase))
  const slide3 = slides3.filter(item => item.toLocaleLowerCase().includes(searchLowerCase))
  const slide4 = slides4.filter(item => item.toLocaleLowerCase().includes(searchLowerCase))
  const slide5 = slides5.filter(item => item.toLocaleLowerCase().includes(searchLowerCase))
  const slide6 = slides6.filter(item => item.toLocaleLowerCase().includes(searchLowerCase))

  return (
    <>
      <div className='container-loja'>
      <div className="container-head-loja">
        <div className="navbar-loja">
        <Link to="/"><h1 className="nav-title-loja">VINIS</h1></Link>
            <div>
              <ul className="menu-loja">
              <Link to="/loja"><li className="menu-item-loja">Loja</li></Link>
                <Link to="/sobre"><li className="menu-item-loja">Sobre nós</li></Link>
                <Link to="/contato"><li className="menu-item-loja">Contato</li></Link>
              </ul>
            </div>
        </div>
      </div>
      <div className='input-div'>
        <input className='input-busca-loja' value={search} placeholder='Pesquise' type='search' onChange={(e) => setSearch(e.target.value)}  />
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
            {slide1.map((item) => (
                <SwiperSlide className="card">
                <Link to="/login"><img className='card-img' src={item} alt="texto" /></Link>
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
            {slide2.map((item) => (
                <SwiperSlide className="card">
                <Link to="/login"><img className='card-img' src={item} alt="texto" /></Link>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
      <div className='destaque-loja'>
        <div className='parecido'>
          <img className='billie-img' src={Billieicon} alt="billie foto" />
          <div className='parecido-texto'>
          <h2 className='parecido-titulo'>PARECIDOS COM</h2>
          <h3 className='parecido-artista'>Billie Eilish</h3>
          </div>
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
            {slide3.map((item) => (
                <SwiperSlide className="card">
                <Link to="/login"><img className='card-img' src={item} alt="texto" /></Link>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
      <div className='destaque-loja'>
      <h2 className='destaque-titulo'>Melhores do R&B</h2>
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
            {slide4.map((item) => (
                <SwiperSlide className="card">
                <Link to="/login"><img className='card-img' src={item} alt="texto" /></Link>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
      <div className='destaque-loja'>
        <div className='parecido'>
          <img className='billie-img' src={Lanaicon} alt="billie foto" />
          <div className='parecido-texto'>
          <h2 className='parecido-titulo'>PARA QUEM AMA</h2>
          <h3 className='parecido-artista'>Lana Del Rey</h3>
          </div>
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
            {slide5.map((item) => (
                <SwiperSlide className="card">
                <Link to="/login"><img className='card-img' src={item} alt="texto" /></Link>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
      <div className='destaque-promo'>
          <div className='parecido-texto-promo'>
            <h2 className='parecido-titulo-promo'>VINIS EM</h2>
            <h3 className='parecido-promo'>Promoção</h3>
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
            {slide6.map((item) => (
                <SwiperSlide className="card">
                <Link to="/login"><img className='card-img' src={item} alt="texto" /></Link>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
      </div>
    </>
  )
}

export default Loja