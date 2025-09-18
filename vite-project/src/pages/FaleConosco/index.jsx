import './style.css';

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
            alert('Mensagem enviada com sucesso!');
        }
    return (
        <section className="contato">
            <h1>Fale Conosco</h1>
            <p>Tire suas duvidas e peça um orçamento sem compromisso.</p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'> 
                    <label className='field'>
                        <span>Nome:</span>
                        <input type="text" name="nome" placeholder='Seu nome' required />
                    </label>
                    <label className="field">
                        <span>Email:</span>
                        <input type="email" placeholder='voce@email.com' required />    
                    </label>
                    <label className="field">
                        <span>Telefone:</span>
                        <input type="tel" placeholder='(00) 00000-0000' required />
                    </label>
                </div>

                <label className="field">
                    <span>:Mensagem:</span>
                    <textarea name="mensagem" placeholder='Escreva sua mensagem aqui...' required></textarea>
                </label>
                <button type="submit" className='btn'>Enviar Mensagem</button>
            </form>
        </section>
    );
}    
export default FaleConosco;