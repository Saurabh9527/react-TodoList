import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import './Task.css'

function Task({ task, id, done, onDelete, onDone }) {

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleDone=()=>{
        setButtonClicked((prevBtnClick) => !prevBtnClick);
        onDone(id); 
    }


    return (
        <div>
            <li key={id} style={{ textDecoration: done ? 'line-through' : '' }}>
                <span className="task-name">{task}</span>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => onDelete(id)}>Delete</Button> &nbsp; &nbsp;
                <Button  variant="outlined" startIcon={<DoneIcon />} 
                onClick={handleDone}
                style={{color : buttonClicked ? "green" : ""}}
                >Done</Button>
            </li>
        </div>
    )
}

export default Task
