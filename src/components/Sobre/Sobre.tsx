import './Sobre.css'
import FundoVinil from '../../assets/images/imagemdisco2.png'
import Gaby from '../../assets/images/Gaby.png'
import Marcos from '../../assets/images/Marcos.png'
import Footer2 from '../Footer2/Footer2'
import { Link } from 'react-router-dom'


function Sobre() {

  return (
    <>
    <div className='container-sobre'>
    <div className="container-head-sobre">
        <div className="navbar-sobre">
            <Link to="/"><h1 className="nav-title-sobrenos">VINIS</h1></Link>
            <div>
              <ul className="menu-sobre">
              <Link to="/loja"><li className="menu-item-loja">Loja</li></Link>
              <Link to="/sobre"><li className="menu-item-sobre">Sobre nós</li></Link>
                <Link to="/contato"><li className="menu-item-sobre">Contato</li></Link>
              </ul>
            </div>
        </div>
      </div>
      <div className='container-music'>
        <h2 className='music'>Music&Co</h2>
        </div>
      <div>
        <img className='fundovinil' src={FundoVinil} alt="" />
        <div className='container-sobre'>
        </div>
        <h2 className="title-sobre">SOBRE NÓS</h2>
      </div>
      <div className='container-autores'>
      <div className='autores'>
        <img className='gaby' src={Gaby} alt="" />
        <img className='marcos' src={Marcos} alt="" />
        </div>  
      <div className='textbox-sobrenos'>
        <p className='text-sobrenos'>A Brand New Disco foi criada em 2023 por amantes de música para amantes de música com o intuito de reunir tudo o que um fã procura: a música em sua melhor forma. Acreditamos que o melhor remédio para a alma é a música. Aquela melodia que irá te acompanhar nos melhores momentos, te acalentar quando necessário, transportá-lo à uma memória especial e muitas emoções outrora agregadas por um significado único.</p>
      </div>
      <div className='textbox-phrase'>
        <p className='text-phrase'>O vaso dá uma forma ao vazio e a música ao silêncio. Georges Braque</p>
      </div>
      </div>
      <Footer2 />
    </div>
    </>
  )
}

export default Sobre