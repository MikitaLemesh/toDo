import React, { useState } from 'react';
import tasks from './constants';
import ToDoList from './ToDoList';

import './App.css';

function App() {
  const [tasksArray, setTasksArray] = useState(tasks)
  function removeTask(id: number) {
    const filteredArray = tasksArray.filter((item) => id !== item.id);
    setTasksArray(filteredArray);
  }
  return (
    <>
     <ToDoList tasks={tasksArray} removeTask={removeTask}/>
    </>
  );
}

export default App;
