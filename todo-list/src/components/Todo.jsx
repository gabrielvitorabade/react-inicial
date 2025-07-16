
export default function Todo({todos, removeTodo, completeTodo}) {
  
  return (
    
          <div className="todo-box" style={{textDecoration: todos.iscomplete ? 'line-through' : 'none'}}>
            <div className='todo-content'>
              <p className="todo-name">{todos.text}</p>
              <p>({todos.category})</p>
            </div>
            <div className='todo-buttons'>
            <button className="complete-button" onClick={()=> completeTodo(todos.id)}>Concluir</button>
            <button className="delete-button" onClick={() => removeTodo(todos.id)} >🗑️</button>
            
            </div>
          </div>
  )
}
