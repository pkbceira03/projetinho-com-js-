import React, { useState } from 'react';
import Header from "./components/Header"
import CreateArea from './components/CreateArea';
import Note from "./components/Note"
import Count from './components/Count';
import {BsArrowRight} from "react-icons/bs"
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./styles.css"

function Todo(props) {
const[notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevValue) =>{
      return[...prevValue, newNote];
    });

    const data = {notes}

    axios.post("http://localhost:8080/api/usuario/{dUsuario}/atividades", data)
    .then(() => {
      console.log("certo amem")
    })
    .catch(() => {
      console.log("errado")
    })
  }

  function deleteNotes(id){
    setNotes(preValue =>{
      return[...preValue.filter((note,index)=>
      index !== id )];
    })

    var concluida = true;

    axios.post("http://localhost:8080/api/usuario/{id}/pontos", concluida)
    .then(() => {
      console.log("certo amem")
    })
    .catch(() => {
      console.log("errado")
    })

  }

  /*function editNotes(id){

  }*/
  return (
    <div className="App">
      <Header />
      <Count count={notes.length ===0? "Tudo feito!":
      `Você tem ${notes.length} coisas para fazer!`}
      />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index)=> (
        <Note 
          key={index} 
          id={index} 
          title={note.title} 
          content={note.content}
          onDelete={deleteNotes} 
          />
      ))}

    <button>
      <Link className="passar" to="/Menu"><BsArrowRight size={20}/></Link>
    </button>
    
    </div>
  );
}

export default Todo