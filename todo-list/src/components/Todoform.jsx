import { useState } from "react";

export default function Todoform({addTodo}) {// atribuição da função addTodo como parâmetro, que será utilizada para adicionar novas tarefas na página principal.
    const [tdname, setTdname] = useState('')
    const [tdcategory, setTdcategory] = useState('') // Criação dos estados tdname e tdcategory, que serão utilizados para armazenar os valores do input e do select respectivamente.
    const handleAddTodo = (e) => {
        e.preventDefault();
               
        if(!tdname || !tdcategory){
            return
        };
        addTodo(tdname, tdcategory); // Chamada da função AddTodo atribuída na página principal com os valores dos estados tdname e tdcategory como argumentos.
        setTdcategory('');
        setTdname('');
    }// Função responsável pela manipulação do evento de submissão de formulário atribuído na linha 19. Ativado pelo button de type submit na linha 21.
  return (
    <div>
        <h2>Criar Nova Tarefa</h2>
        <form onSubmit={handleAddTodo}>
            <input value={tdname} type="text" placeholder='Títúlo da tarefa...' onChange={(e)=>setTdname(e.target.value)}/>{/*Atribuindo o valor do input ao estado tdname*/}
            <select value={tdcategory} onChange={(e)=>setTdcategory(e.target.value)}>{/* Atribuindo o valor do select ao estado tdcategory*/}
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
