import './Final.css'
import FundoVinil from '../../assets/images/imagemdisco2.png'
import Gaby from '../../assets/images/Gaby.png'
import Marcos from '../../assets/images/Marcos.png'
import Footer2 from '../Footer2/Footer2'
import { Link } from 'react-router-dom'
import check from '../../assets/images/🦆 icon _check circled outline_.png'


function Final() {

  return (
    <>
    <div className='final-geral'>
    <div className='container-final'>
    <div>
    <h1 className='compra'>Sua compra foi concluída com sucesso</h1>
    </div>
    <div className='container-check'>
    <img className='check' src={check} alt="check" />
    </div>
    <div>
    <h2>Agradecemos a preferência,</h2>
    </div>
    <div>
    <h2>volte sempre!</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default Final