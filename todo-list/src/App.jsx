import { useState } from 'react'
import Todos from './components/Todo'
import Todoform from './components/Todoform'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'estilizar a página',
      category:'Trabalho',
      iscomplete:false,
    },
    {
      id:2,
      text:'dar funcionalidade ao botão',
      category:'estudo',
      iscomplete:false,
    },
    {
      id:3,
      text:'adicionar novo todo',
      category:'Trabalho',
      iscomplete:false,
    }
  ])
  const addTodo = (text,category)=>{
    const newTodos =[
      ...todos,
      {
      id: Math.random(),
      text,
      category,
      iscomplete: false,
      }
    ];
    setTodos(newTodos);
  }
 
  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
          {todos.map((todos)=> (
          <Todos todos={todos}/>
        ))}
      </div>
      <Todoform addTodo ={addTodo}/>
      
    </div>
     
  )
}

export default App
