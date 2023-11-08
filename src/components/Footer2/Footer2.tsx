import './Footer2.css'
import Map from '../../assets/images/Map.png'
import Icon1 from '../../assets/images/🦆 icon _Alternate Phone_.png'
import Icon2 from '../../assets/images/🦆 icon _instagram alt_.png'

function Footer2() {

  return (
    <>
      <footer>
        <div className='container-footer'>
            <img className='mapa' src={Map} alt="mapinha" />
          <div className='container-icons'>
            <h1 className='entre-contato'>
              ENTRE EM CONTATO CONOSCO
            </h1>
            <div className='contato'>
              <img className='icons' src={Icon1} alt="" />
              <div className='text-full'>
                <h2 className='redes'>contato</h2>
                <p className='dados'>9999999999</p>
              </div>
            </div>
            <div className='cont-right'>
            <div className='instagram'>
              <img className='icons' src={Icon2} alt="" />
              <div className='text-full'>
                <h2 className='redes'>instagram</h2>
                <p className='dados'>@brand_new_disco</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='linha'></div>
        <div className='cont-autoria'>
            <h2 className='title-footer'>Brand New Disco</h2>
            <p className='autoria'>Desenvolvido por Gabrielly Moreira e Marcos Trajano</p>
          </div>
      </footer>
    </>
  )
}

export default Footer2