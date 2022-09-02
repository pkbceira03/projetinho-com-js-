import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Cadastrar from './pages/cadastro/Cadastro';
import Principal from './pages/principal/principal';
import Menu from './pages/menu/menu';
import Todo from './pages/todolist/Todo';

function App(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Cadastrar" element={<Cadastrar />}/>
                <Route path="/Menu" element={<Menu />}/>
                <Route path="/TodoList" element={<Todo />}/>
            </Routes>
        </Router>
    );
}

export default App;