import {useState} from 'react';
import { Link } from 'react-router-dom';
import logoIMG from '../../images/logo.png';
import unbIMG from '../../images/unb.png';
import {searchLogin} from '../../services/api';
import { useNavigate } from 'react-router-dom';

import './styles.css'

function Login() {

  let navigate = useNavigate()
  
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setSenha(e.target.value);
  }

  function onButtonClick(){
    onSearch()
  }

  const onSearch = async (email, senha) =>{
    const result = await searchLogin(email, senha)
    navigate("/Menu")
  }

  return (
    <div className="container">
      <div className="container-login">
        <span className="logo-unb">
          <img src={unbIMG} alt="oiii"/>
        </span>
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem vindo</span>

            <span className="login-form-title">
              <img src={logoIMG} alt="oiii"/>
            </span>

            <div className="wrap-input">
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email"
                value={email}
                onChange={emailHandler}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={senha !== "" ? 'has-val input' : 'input'} 
              type="password"
              value={senha}
              onChange={passwordHandler}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onSubmit={onButtonClick}>Login</button>
            </div>

            <div className="text-center">
              
              <span className="txt1">Não possui conta?</span>

              <li ><Link className='txt2' to="/Cadastrar">Crair conta</Link></li>
            </div>

{/*             {(email && senha) ? (
              <div>
                <Link to="/Menu"></Link>
              </div>
            ): alert("email e/ou senha incorretos")}; */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
