
export default function Todo({todos}) {
  return (
          <div className='todo-content'>
            <p>{todos.text}</p>
            <p>({todos.category})</p>
          <div>
          <button>Concluida</button>
          <button>x</button>
          </div>
         </div>
  )
}
