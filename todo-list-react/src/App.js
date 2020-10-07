import React, {useState} from 'react';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState('')
  const [counter, setCounter] = useState(0)

  function addTask(event) {
    const addMe = {
      task: task,
      id: taskList.length + 1
    }
    setTaskList(taskList.concat(addMe))
    setTask('')
    setCounter(counter + 1)
  }

  function handleInput(event) {
    setTask(event.target.value)
  }

  function statusComplete(event) {
    if(event.target.className === '') {
      event.target.className = 'isDone'
      setCounter(counter - 1)
    } else {
      event.target.className = ''
      setCounter(counter + 1)
    }
  }

  return (
    <div>
      <input value={task} onChange={handleInput}></input>
      <button onClick={addTask}>ADD</button>
      <p>{counter}</p>
      <ul>
        {taskList.map(task => <li className='' onClick={statusComplete} key={task.id}>{task.task}</li>)}
      </ul>
    </div>
  );
}

export default App;
