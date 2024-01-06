import React, { useState } from "react";
import tasks from "./constants";

function ToDoList() {
    const [tasksList, setTasksList] = useState(tasks);
    function gun(id: number) {
      const filteredTasks = tasksList.filter(item => item.id !== id)
      setTasksList(filteredTasks)
      console.log(filteredTasks)
    }
    return (
      <div>
        <h3>What to do</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          {tasksList.map((item) => <li><input type='checkbox' checked={item.isDone}/>
              <span>{item.task}</span>
              <button onClick={() => gun(item.id)}>x</button>
            </li>
          )}
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