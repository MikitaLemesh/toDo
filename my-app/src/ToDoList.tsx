import React from "react";
import { PropsTypes } from "./types";

function ToDoList(props: PropsTypes) {
  return (
    <>
      <h1>To Do List</h1>
      <form action="">
        <input type="text" />
        <button>add</button>
      </form>
      {
      props.tasks.map((item) => <li key={item.id}>
        <input type='checkbox' checked={item.isDone} />
        <span>{item.task}</span>
        <button>x</button>
      </li>)
      }
    </>
  )
}

export default ToDoList;