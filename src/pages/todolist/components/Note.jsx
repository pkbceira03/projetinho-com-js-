import React from 'react';
import{GiConfirmed} from "react-icons/gi"

function Note({title, content, onDelete,id}) {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}><GiConfirmed size={25}/></button>
        </div>
    )
}

export default Note;