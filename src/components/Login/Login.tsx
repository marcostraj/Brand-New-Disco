import './Login.css'
import React, {useState, useCallback} from "react";
import { Link } from 'react-router-dom';
import Carrinho from '../Carrinho/Carrinho';
import Footer2 from '../Footer2/Footer2';

interface IFormState{
    email: string;
    password: string;
    stayLoggedIn: boolean;
}

function Login() {

    const [formState, setFormState] = useState<IFormState>({
    email: "",
    password: "",
    stayLoggedIn: false,
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const {email, password} = formState;

        if(!email || !password){

            window.alert("Preencha todos os campos!");

            setIsLoggedIn(false);

            return;
        }

        setIsLoggedIn(true);

    }, [formState]);

    if(isLoggedIn){
        return <div>
            <Carrinho/>
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
    <div className='container-log'>
        <div className='cont-login'>
            <div>
                <h2 className='title-login'>Login</h2>
            </div>
            <form onSubmit={handleSubmit} className='forms-login'>
        <div className="login-email">
            <label htmlFor="exampleInputEmail1">E-mail</label>
            <input type="email" className="input-email" id="email" name='email' required value={formState.email} onChange={(event) => setFormState({...formState, email: event.currentTarget?.value || "",})}/>
        </div>
        <div>
            <label htmlFor="exampleInputPassword1">Senha</label>
            <input type="password" className="input-name" id="password" name='password' required value={formState.password} onChange={(event) => setFormState({...formState, password: event.currentTarget?.value || "",})}/>
        </div>
        <div className="input-checkbox">
            <input type="checkbox" className="form-check-input" id="stayLoggedIn" checked={formState.stayLoggedIn} onChange={(event) => setFormState({...formState, stayLoggedIn: !!event.currentTarget?.checked})}/>
            <label className="input-caixinha" htmlFor="stayLoggedIn">Lembre-se de mim</label>
        </div>
        <div className='botao-submit'>
        <button type="submit">PRÓXIMO</button>
        </div>
        </form>
        </div>
    </div>
    <Footer2 />
    </>
  )
}

export default Login