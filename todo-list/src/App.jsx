import { useState } from 'react'
import Todos from './components/Todo'
import Todoform from './components/Todoform'
import Search from './components/Search'
import Filter from './components/Filter'
import './App.css'

function App() {

  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('asc')
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'estilizar a página',
      category: 'Trabalho',
      iscomplete: false,
    },
    {
      id: 2,
      text: 'dar funcionalidade ao botão',
      category: 'estudo',
      iscomplete: false,
    },
    {
      id: 3,
      text: 'adicionar novo todo',
      category: 'Trabalho',
      iscomplete: false,
    }
  ])
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        iscomplete: false,
      }
    ];
    setTodos(newTodos);
  }
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, iscomplete: !todo.iscomplete }
      }
      return todo;
    }
    )
    setTodos(newTodos)
  }


  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {todos.
          
          filter((todo) => filter === 'all' 
          ? true 
          : filter === 'complete' 
          ? todo.iscomplete 
          : !todo.iscomplete )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b)=> sort === 'Asc' 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text)
          )
          .map((todos) => (
            <Todos key={todos.id} todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <Todoform addTodo={addTodo} />

    </div>

  )
}

export default App
