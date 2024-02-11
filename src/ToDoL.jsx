import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import InputBox from './InputBox';
import Task from './Task';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import './ToDoL.css'

function ToDoL() {
  const [todos, setTodos] = useState([{ task: "Eat", id: uuidv4() , done:false }]);

  const handleAdd = (val) => {
    setTodos((prevTodo) => [...prevTodo, { task: val, id: uuidv4() , done:false }])
  }

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
}

const doneTodoAll =()=>{
  setTodos((prevTodo) => prevTodo.map((t)=>({...t , done: !t.done})));
}

const doneTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((t) => {
        if (t.id === id) {
            return { ...t, done: !t.done };
        } else {
            return t;
        }
    }));
};



  return (
    <div>
      <InputBox addTodo={handleAdd} />
      <br />
      <Button variant="outlined" startIcon={<DoneIcon />} onClick={doneTodoAll}>Done All</Button>
      <ul style={{listStyleType:"none"}}>
        {todos.map((t) => (
          <Task key={t.id} task={t.task} id={t.id} done={t.done} onDelete={handleDelete} onDone={doneTodo}/>
        ))}
      </ul>
    </div>
  )
}

export default ToDoL
