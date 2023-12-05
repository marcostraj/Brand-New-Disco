import './Carrinho.css'
import React, {useState, useCallback} from "react";
import { Link } from 'react-router-dom';
import Final from '../Final/Final';
import Footer2 from '../Footer2/Footer2';

interface IFormState{
    email: string;
    adress: string;
    bairro: string;
    cep: string;
    tel: string;
    date: string;
    stayLoggedIn: boolean;
}

function Carrinho() {

    const [formState, setFormState] = useState<IFormState>({
    email: "",
    adress: "",
    bairro: "",
    cep: "",
    tel: "",
    date: "",
    stayLoggedIn: false,
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const {email, adress, bairro, cep, tel, date} = formState;

        if(!email || !adress || !bairro || !cep || !tel || !date){

            window.alert("Preencha todos os campos!");

            setIsLoggedIn(false);

            return;
        }

        setIsLoggedIn(true);

    }, [formState]);

    if(isLoggedIn){
        return <div>
            <Final/>
        </div>
    }

  return (
    <>
    <div className='container-login'>
    <div className="container-head-login">
        <div className="navbar-login">
        <Link to="/"><h1 className="nav-title-login">VINIS</h1></Link>
            <div>
              <ul className="menu-login">
                <Link to="/loja"><li className="menu-item-login">Loja</li></Link>
                <Link to="/sobre"><li className="menu-item-login">Sobre nós</li></Link>
                <Link to="/contato"><li className="menu-item-login">Contato</li></Link>
              </ul>
            </div>
        </div>
      </div>
    </div>
    <div className='container-informacoes'>
        <h2 className='informacoes'>Antes de concluir sua conta, precisamos de algumas informações</h2>
      </div>
    <div className='container-carrinho'>
        <div className='cont-carrinho'>
            <form onSubmit={handleSubmit} className='forms-carrinho'>
        <div className="login-email">
            <label htmlFor="exampleInputEmail1">Nome completo</label>
            <input type="text" className="input-email" id="email" name='email' required value={formState.email} onChange={(event) => setFormState({...formState, email: event.currentTarget?.value || "",})}/>
        </div>
        <div>
            <label htmlFor="exampleInputPassword1">Endereço</label>
            <input type="text" className="input-name" id="adress" name='adress' required value={formState.adress} onChange={(event) => setFormState({...formState, adress: event.currentTarget?.value || "",})}/>
        </div>
        <div className='bairro-cep'>
            <div className='bairro'>
            <label htmlFor="exampleInputPassword1">Bairro</label>
            <input type="text" className="input-bairro" id="bairro" name='bairro' required value={formState.bairro} onChange={(event) => setFormState({...formState, bairro: event.currentTarget?.value || "",})}/>
            </div>
            <div className='cep'>
            <label htmlFor="exampleInputPassword1">CEP</label>
            <input type="tel" className="input-cep" id="cep" name='cep' placeholder='12345-678' required value={formState.cep} onChange={(event) => setFormState({...formState, cep: event.currentTarget?.value || "",})}/>
            </div>
        </div>
        <div className='bairro-cep'>
            <div className='bairro'>
            <label htmlFor="exampleInputPassword1">Celular</label>
            <input type="text" className="input-bairro" id="tel" name='tel' placeholder='(12) 34567-8910' required value={formState.tel} onChange={(event) => setFormState({...formState, tel: event.currentTarget?.value || "",})}/>
            </div>
            <div className='cep'>
            <label htmlFor="exampleInputPassword1">Data de nascimento</label>
            <input type="date" className="input-date" id="date" name='date' required value={formState.date} onChange={(event) => setFormState({...formState, date: event.currentTarget?.value || "",})}/>
            </div>
        </div>
        <div className='botao-submit'>
        <button type="submit">FINALIZAR</button>
        </div>
        </form>
        </div>
    </div>
    <Footer2/>
    </>
  )
}

export default Carrinho