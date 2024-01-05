import React from "react";

function ToDoList() {
    return (
      <div>
        <h3>What to do</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          <li><input type='checkbox' checked={true}/><span>CSS&HTML</span></li>
          <li><input type='checkbox' checked={true}/><span>JS</span></li>
          <li><input type='checkbox' checked={false}/><span>React</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Complited</button>
        </div>
      </div>
    )
}

export default ToDoList;