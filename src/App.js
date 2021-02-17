import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      "text": "Google Meet",
      "day": "Monday",
      "reminder": true,
      "id": 1
    },
    {
      "text": "College Viva",
      "day": "Friday",
      "reminder": true,
      "id": 2
    }
  ])
  const updateHandler = () => {
    const id = 2;
    const reqTodo = todos.filter((todo) => (todo.id == id))[0]
    // before update
    console.log(reqTodo)
    reqTodo.reminder = false
    // after update
    console.log(reqTodo)
    // add
    //  setTodos([...todos, reqTodo])
    // delete 
    // setTodos(todos.filter((todo) => (todo.id !== id)))
    // update
    // setTodos(todos.filter((todo) => (todo.id === id ? todo : { ...todo, reqTodo })))
  }
  return (
    <>
      <input type='button' onClick={updateHandler} value='Update' />
      <ul>
        {todos.map((todo) => (
          <li>{todo.id} {todo.text} {todo.day} {todo.reminder.toString()} </li>
        ))
        }
      </ul>
    </>
  );
}

export default App;
