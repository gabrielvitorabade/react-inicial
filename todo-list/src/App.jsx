import { useState } from 'react'
import Todos from './componexznts/Todo'
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
 
  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
          {todos.map((todos)=> (
          <Todos todos={todos}/>
        ))}
      </div>
      
    </div>
     
  )
}

export default App
