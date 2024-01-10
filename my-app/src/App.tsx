import React, { useState } from 'react';
import tasks from './constants';
import ToDoList from './ToDoList';
import { Task } from './types';

import './App.css';

function App() {
  const [tasksArray, setTasksArray] = useState(tasks)
  function removeTask(id: number) {
    const filteredArray = tasksArray.filter((item) => id !== item.id);
    setTasksArray(filteredArray);
  }
  function addTask(newTaskValue: string) {
    const newTask: Task = {
      id: tasksArray.length + 1,
      task: newTaskValue, 
      isDone: false
    }
    const addedTaskArray = tasksArray.concat(newTask);
    setTasksArray(addedTaskArray)
  }
  return (
    <>
     <ToDoList tasks={tasksArray} removeTask={removeTask} addTask={addTask}/>
    </>
  );
}

export default App;
