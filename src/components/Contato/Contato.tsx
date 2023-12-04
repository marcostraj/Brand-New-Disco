import './Contato.css'
import FundoVinil from '../../assets/images/imagemdisco (4).png'
import { useForm, SubmitHandler } from "react-hook-form"
import Icon1 from '../../assets/images/🦆 icon _Alternate Phone_.png'
import Icon2 from '../../assets/images/🦆 icon _instagram alt_.png'
import { Link } from 'react-router-dom'
import React, {useState, useCallback} from "react";


function Contato() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    alert("Mensagem enviada!")

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <>
    <div className='container-contato'>
    <div className="container-head">
        <div className="navbar-contato">
            <Link to="/"><h1 className="nav-title-contate">VINIS</h1></Link>
            <div>
              <ul className="menu-contate">
              <Link to="/loja"><li className="menu-item-contate">Loja</li></Link>
              <Link to="/sobre"><li className="menu-item-contate">Sobre nós</li></Link>
              <Link to="/contato"><li className="menu-item-contate">Contato</li></Link>
              </ul>
            </div>
        </div>
      </div>
      <div className='container-music'>
        <h2 className='music'>Contate-nos</h2>
        </div>
      <div>
        <img className='fundovinil' src={FundoVinil} alt="" />
        <div className='container-contate'>
        </div>
        <h2 className="title-fale">FALE CONOSCO</h2>
      </div>
    </div>
    <div className='container-contact'>
            <div className='cont-contato'>
            <form className='forms' onSubmit={sendEmail}>
              <input className='input-name' type="text" placeholder='Nome Completo' required onChange={(e) => setName(e.target.value)} value={name}/>
              <input className='input-email' placeholder='Email' type="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
              <input className='input-message' type='text' placeholder='Mensagem' required onChange={(e) => setMessage(e.target.value)} value={message} />
              <div className='botao-contato'>
              <button type="submit">Enviar</button>
              </div>
            </form>
            <div className='cont-dados'>
            <div className='contato'>
              <img className='icons-cont' src={Icon1} alt="" />
              <div className='text-full'>
                <h2 className='redes'>contato</h2>
                <p className='dados'>9999999999</p>
              </div>
            </div>
            <div className='cont-right'>
            <div className='instagram'>
              <img className='icons-cont' src={Icon2} alt="" />
              <div className='text-full'>
                <h2 className='redes'>instagram</h2>
                <p className='dados'>@brand_new_disco</p>
              </div>
            </div>
            </div>
            </div>
            </div>
          </div>
    </>
  )
}

export default Contato