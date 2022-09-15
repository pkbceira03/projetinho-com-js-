import { Link } from 'react-router-dom';
import React from 'react';


import './styles.css'

function Menu2(){
    return(
        <div className='container'>
            <div className='container-information-menu'>
                <div className='todo'>
                    <button className='button-todo'><Link className="go" to="/TodoList">Todo-List</Link></button>
                </div>
                <div className='vila'>
                    <button className='button-vila'><Link className="go" to="/">Villa</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Menu2;