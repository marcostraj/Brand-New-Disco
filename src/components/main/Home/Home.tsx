import Sobre from '../../Sobre/Sobre'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <h1 className='nav-title'>VINIS</h1>
          <div>
            <ul className='menu'>
            <Link to="/loja"><li className="menu-item-loja">Loja</li></Link>
              <Link to="sobre"><li className='menu-item'>Sobre nós</li></Link>
              <Link to="contato"><li className='menu-item'>Contato</li></Link>
            </ul>
          </div>
        </div>
        <div className='home-title'>
          <h2 className='title-item'>Brand</h2>
          <h4 className='little-title-item'>new</h4>
          <h2 className='title-item'>Disco</h2>
        </div>
      </div>
    </>
  )
}

export default Home
