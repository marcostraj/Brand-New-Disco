import './Contato.css'
import FundoVinil from '../../assets/images/imagemdisco2.png'


function Contato() {

  return (
    <>
    <div className='container-contato'>
    <div className="container-head">
        <div className="navbar-contato">
            <h1 className="nav-title-contate">VINIS</h1>
            <div>
              <ul className="menu-contate">
                <li className="menu-item-contate">Sobre nós</li>
                <li className="menu-item-contate">Loja</li>
                <li className="menu-item-contate">Contato</li>
              </ul>
            </div>
        </div>
      </div>
      <div>
        <img className='fundovinil' src={FundoVinil} alt="" />
        <div className='container-contate'>
        </div>
        <h2 className="title-fale">FALE CONOSCO</h2>
      </div>
    </div>
    </>
  )
}

export default Contato