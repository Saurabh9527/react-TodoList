import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './InputBox.css'

function InputBox({addTodo}) {

    const[val , setVal] = useState("");

    function handleInput(e){
        setVal(e.target.value);
    }

    function handleAdd(){
        setVal("")
        return addTodo(val);    
    }

  return (
    <div>
      <TextField id="outlined-basic" label="Add Task Name" variant="outlined" value={val} onChange={handleInput} required />
      <br /><br />
      <Button variant="contained" onClick={handleAdd}>Add Task</Button>
    </div>
  )
}

export default InputBox
