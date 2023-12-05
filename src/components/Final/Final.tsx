import './Final.css'
import check from '../../assets/images/🦆 icon _check circled outline_.png'


function Final() {

  return (
    <>
    <div className='final-geral'>
    <div className='container-final'>
    <div>
    <h1 className='compra'>Sua conta foi concluída com sucesso</h1>
    </div>
    <div className='container-check'>
    <img className='check' src={check} alt="check" />
    </div>
    <div>
    <h2>Você já pode comprar o quanto quiser no nosso site</h2>
    </div>
    <div>
    <h2>aproveite!</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default Final