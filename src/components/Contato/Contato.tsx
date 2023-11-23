import './Contato.css'
import FundoVinil from '../../assets/images/imagemdisco2.png'
import { useForm, SubmitHandler } from "react-hook-form"
import Icon1 from '../../assets/images/🦆 icon _Alternate Phone_.png'
import Icon2 from '../../assets/images/🦆 icon _instagram alt_.png'

type FormValues = {
  firstName: string
  email: string
  message: string
}

function Contato() {

  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

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
    <div className='container-contact'>
            <div className='cont-contato'>
            <form className='forms' onSubmit={handleSubmit(onSubmit)}>
              <input className='input-name' placeholder='Nome Completo' {...register("firstName")} />
              <input className='input-email' placeholder='Email' type="email" {...register("email")} />
              <input className='input-message' placeholder='Mensagem' {...register("message")} />

              <input className='submit' type="submit" />
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