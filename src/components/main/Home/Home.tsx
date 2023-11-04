import './Home.css'

function Home() {

  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <h1 className='nav-title'>VINIS</h1>
          <div>
            <ul className='menu'>
              <li className='menu-item'>Sobre nós</li>
              <li className='menu-item'>Loja</li>
              <li className='menu-item'>Contato</li>
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
