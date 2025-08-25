import React , { useState } from 'react';
import './style.css';

const AdicionarProduto = ({ onAdd }) => {  
  const [texto,setTexto] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    onAdd(texto);
    setTexto('');

  };
  return (
    <form className="form" onSubmit={enviar}> 
      <input 
        type="text" 
        placeholder="Digite o nome do produto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );

}    