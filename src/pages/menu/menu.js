import { Link } from 'react-router-dom';
import React from 'react';
import menuIMG from '../../images/main_Screen.png';

import './styles.css'

function Menu(){
    return(
        <div className='container'>
            <div className='container-information'>
                <span className="imagem">
                    <img src={menuIMG} alt="oiii"/>
                </span>
                <div className='todo'>
                    <button className='button-todo'><Link className="go" to="/">Todo-List</Link></button>
                </div>
                <div className='text'>
                    <h2>Bem vindo!!!!</h2>
                    <h3>História do Feudo</h3>
                </div>
                <div className='vila'>
                    <button className='button-vila'><Link className="go" to="/">Villa</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Menu;