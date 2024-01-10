import React, { useState } from "react";
import { PropsTypes } from "./types";

function ToDoList(props: PropsTypes) {
  const [newTaskInput, setNewTaskInput] = useState('');
  return (
    <>
      <h1>To Do List</h1>
      <div>
        <input type="text" value={newTaskInput} onChange={(e) => {setNewTaskInput(e.currentTarget.value)}}/>
        <button onClick={() => {
            props.addTask(newTaskInput);
            setNewTaskInput('');
          }}>add</button>
      </div>
      {
        props.tasks.map((item) => <li key={item.id}>
          <input type='checkbox' checked={item.isDone} />
          <span>{item.task}</span>
          <button onClick={() => {props.removeTask(item.id)}}>x</button>
        </li>)
      }
    </>
  )
}

export default ToDoList;