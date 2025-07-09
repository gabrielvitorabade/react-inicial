import { useState } from "react";

export default function Todoform() {
    const [tdname, setTdname] = useState('')
    const [tdcategory, setTdcategory] = useState('')

    const handleAddTodo = (e) => {
        e.preventDefault();
     console.log(tdname, tdcategory);
        if(!tdname || !tdcategory){
            return
        };
        setTdcategory('');
        setTdname('');
    }
  return (
    <div>
        <h2>Criar Nova Tarefa</h2>
        <form onSubmit={handleAddTodo}>
            <input value={tdname} type="text" placeholder='Títúlo da tarefa...' onChange={(e)=>setTdname(e.target.value)}/>
            <select value={tdcategory} onChange={(e)=>setTdcategory(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <div id='add-button_box'>
                <button id='add-button' type="submit">Adicionar Tarefa</button>
            </div>
        </form>
    </div>
  )
}
