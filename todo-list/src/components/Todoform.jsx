import React from 'react'

export default function Todoform() {
  return (
    <div>
        <h2>Criar Nova Tarefa</h2>
        <input type="text" placeholder='Títúlo da tarefa...'/>
        <select>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudo">Estudo</option>
        </select>
        <div id='add-button_box'>
            <button id='add-button'>Adicionar Tarefa</button>
        </div>
    </div>
  )
}
