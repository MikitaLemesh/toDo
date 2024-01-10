import React from 'react';
import tasks from './constants';
import ToDoList from './ToDoList';

import './App.css';

function App() {
  return (
    <>
     <ToDoList tasks={tasks}/>
    </>
  );
}

export default App;
