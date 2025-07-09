
export default function Todo({todos}) {
  return (
          <div className="todo-box">
            <div className='todo-content'>
              <p className="todo-name">{todos.text}</p>
              <p>({todos.category})</p>
            </div>
            <div className='todo-buttons'>
            <button className="complete-button">Concluida</button>
            <button className="delete-button">x</button>
            
            </div>
          </div>
  )
}
