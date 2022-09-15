//import {useState} from 'react';
import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import unbIMG from '../../images/unb.png';
import { useNavigate } from "react-router-dom";
//import { useHistory , Link} from 'react-router-dom';

import './styles.css'

const validationCadastro = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().required("O email é obrigatório"),
  senha: yup.string().required("A senha é obrigatório")
})

function Cadastrar(){

  let navigate = useNavigate()
  //let history = useHistory()

  const { register, handleSubmit, formState: { errors } }= useForm({
    resolver: yupResolver(validationCadastro)
  })

  const addUser = data => axios.post("http://localhost:8080/api/usuario", data)
  try{
    console.log("deu certo")
    navigate('/');
  }catch{
    console.log("deu errado")
  }
  
  /*axios.post("http://localhost:8080/api/usuario", data)
  .then(() => {
    console.log("certo amem")
    //history.push("/")
  })
  .catch(() => {
    console.log("errado")
  })*/

  return (

      <div className="container">
        <div className="container-login">
          <div className='imagem'>
            <span className="logo-unb">
              <img src={unbIMG} alt="oiii"/>
            </span>
          </div>
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit(addUser)}>

              <span className="login-form-title">Faça seu cadastro</span>

              <div className="wrap-input">
                <input 
                  //className={nome !== "" ? 'has-val input' : 'input'} 
                  type="nome"
                  name="nome"{...register("nome")}
                />
                <p className='error-message'>{errors.nome?.message}</p>
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>

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
                <button className="login-form-btn" /*onSubmit={compareEmailHandler}*/>
                  Cadastrar
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
  );
}

export default Cadastrar;

