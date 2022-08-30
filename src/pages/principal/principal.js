import unbIMG from '../../images/unb.png';
import { Link } from 'react-router-dom';
import React from 'react';


import './styles.css'

function Principal(){
    return(
        <div className="container">
            <div className="container-information">
                    <span className="logo-unb">
                        <img src={unbIMG} alt="oiii"/>
                    </span>
                <div className='from'>
                    <h2 className='text'>Bem-vindo</h2>
                    <h3 className='text'>Você acaba de chegar ao Feudo Preto Tarras Desvastadas</h3>
                    <h3 className='text'>Precisamos de sua ajuda para Ressurgir você toma a missão??</h3>
                    <div>
                        <button className='button1'><Link className="go" to="/Login">Faça o Login</Link></button>
                        <p className='se-conta'>Se não possui conta ainda clik no botão abaixo</p>
                        <button className='button2'><Link className="go" to="/Cadastrar">Faça seu cadastro</Link></button>
                    </div>
                </div>

                <div className='from2'>
                    <h2 className='text'>Quem Somos</h2>
                    <p className='text'>
                        Somos estudantes da Unb, 
                        esse programa foi feito para a matéria de Desnvolvimento de Software.
                    
                    </p>
                    <h2 className='text'>Informações do Programa</h2>
                    <p className='text'>
                        Fizemos um software de afazeres, para que vocês possa deixar 
                        o planejamento do seu dia, mas com o objetivo de deixa-lo mais dimânico, 
                        colocamos uma gamificação para fazer o usuário sempre cumprit com o que 
                        ele mesmo se propos a fazer.
                        Para não pra mais spoiler faça seu login e venha se divertir fazendo suas tarefas!!!!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Principal;