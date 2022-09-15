import React from 'react';
//import {useState} from 'react';
import { Link } from 'react-router-dom';
import logoIMG from '../../images/logo.png';
import unbIMG from '../../images/unb.png';
//import ImgFundo from '../../images/Fundo_Main.png';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'


import './styles.css'

// prettier - eslint 

//function Login() {

  //let history = useNavigate()
  
  //const [email, setEmail] = useState("")
  //const [senha, setSenha] = useState("")

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './styles.css'

const validationLogin = yup.object().shape({
  email: yup.string().required("O email é obrigatório"),
  senha: yup.string().required("A senha é obrigatório")
})

function Login() {

  let navigate = useNavigate()


  const { register, handleSubmit, formState: { errors } }= useForm({
    resolver: yupResolver(validationLogin)
  })

  const getUser = data => console.log(data)
  navigate('/Menu')



  const login = (email, senha) => {
    const data = {email, senha}

    axios.post("http://localhost:8080/api/usuario/login", data)
    .then(() => {
      console.log("certo amem")
      navigate("/")
    })
    .catch(() => {
      console.log("errado")
    })
  }


  
  return (
    <div className="container">
      <div className="container-login">
        <div className='imagem'>
          <span className="logo-unb">
            <img src={unbIMG} />
          </span>
        </div>
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit(getUser)}>

            <span className="login-form-title">Bem vindo</span>
            
              <span className="login-form-title">
                <img src={logoIMG} alt="oiii"/>
              </span>
            

            <div className="wrap-input">
                <input 
                  //className={email !== "" ? 'has-val input' : 'input'} 
                  type="email"
                  name="email"{...register("email")}
                />
                <p className='error-message'>{errors.email?.message}</p>
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input 
                  //className={senha !== "" ? 'has-val input' : 'input'} 
                  type="password"
                  name="senha"{...register("senha")}
                />
                <p className='error-message'>{errors.senha?.message}</p>
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

            <div className="container-login-form-btn">

              <button className="login-form-btn" onClick={(event) => {
                event.preventDefault()
                login()
              }}>Login</button>

              

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
