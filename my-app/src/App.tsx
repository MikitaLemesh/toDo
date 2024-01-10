import React from 'react';
import tasks from './constants';

import './App.css';

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <form action="">
        <input type="text" />
        <button>add</button>
      </form>
      { tasks.map((item) => <li key={item.id}>
        <input type='checkbox' checked={item.isDone}/>
        <span>{item.task}</span>
        <button>x</button>
      </li>) }
    </>
  );
}

export default App;
