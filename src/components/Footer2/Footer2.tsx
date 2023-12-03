import './Footer2.css'
import Icon1 from '../../assets/images/🦆 icon _Alternate Phone_.png'
import Icon2 from '../../assets/images/🦆 icon _instagram alt_.png'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Footer2() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAnEPSXXqsRSQml8LY2Pos68aLn_IupBm8"
  })

  return (
    <>
      <footer>
        <div className='container-footer'>
          <div className='map'>
          {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%' }}
                center={{
                  lat: -22.121168, 
                  lng: -51.408072
                }}
                zoom={15}
              >
              </GoogleMap>
          ) : <></>}
          </div>
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