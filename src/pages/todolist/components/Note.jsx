import React from 'react';
import{GiConfirmed} from "react-icons/gi"
import {useState, useEffect} from 'react'
import axios from 'axios'

function Note({title, content, onDelete,id}) {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/api/usuario/{dUsuario}/atividades")
        .then((response) => {
            setPosts(response.data)
            console.log("certo amem")
          })
          .catch(() => {
            console.log("errado")
          })
    })

    return (
        <div>
            {posts.map((post, hey) =>{
                return(
                    <div className='note'>
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <button onClick={() => onDelete(id)}><GiConfirmed size={25}/></button>
                    </div>
                )
            })}
        </div>
    )
}

export default Note;