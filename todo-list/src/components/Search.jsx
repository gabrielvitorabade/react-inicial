
export default function Search({search, setSearch}) {
  return (
  <div className="search-box" style={{marginBottom: '0.5em'}}>
        <input  
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Pesquisar tarefa...'  />
        
  </div>
  )
}
