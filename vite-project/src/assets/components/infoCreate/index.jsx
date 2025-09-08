// src\assets\components\infoCreate\index.jsx
import { useState } from 'react';
import './style.css'

function Infocliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [listaClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listaClientes, { nome, email }]);
        setNome('');
        setEmail('');
    }     
    return (
        <div className='info-cliente'>
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={adicionarCliente}>
                <div>
                    <label>Nome:</label>
                    <input type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <button type="submit">Adicionar Cliente</button>
            </form>
        </div>
        
    );
}

export default Infocliente;