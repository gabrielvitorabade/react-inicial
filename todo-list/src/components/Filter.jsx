
export default function Filter({filter,setFilter,setSort}) {
  return (
    <div>
        <h2>Filtrar</h2>
        <div className="filter-options">
            <div>
                <p>status:</p>
                <select value={filter} onChange={(e)=> setFilter(e.target.value)} >
                    <option value="all">Todas</option>
                    <option value="complete">Completas</option>
                    <option value="incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>ordem alfabetica:</p>
                <div>
                    <button onClick={()=> setSort('Asc')}>Asc</button>
                    <button onClick={()=> setSort('Desc')}>Desc</button>
                </div>
            </div>
        </div>
    </div>
  )
}
