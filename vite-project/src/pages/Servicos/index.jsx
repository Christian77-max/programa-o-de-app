// src\pages\Servicos\index.jsx

import './style.css'

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Serviços de contabilidade</h1>
            <p>Atendemos empresas de diversos setores, oferecendo uma gama completa de serviços contábeis para atender às suas necessidades específicas. Nossos principais serviços incluem:</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Abertura de empresas</h3>
                    <p>Auxiliamos na escolha do tipo societário, registro na junta comercial, obtenção do CNPJ e alvarás necessários para o funcionamento da empresa.</p>
                </div>
                <div className='card'>
                    <h3>Contabilidade fiscal</h3>
                    <p>Realizamos a apuração de impostos, elaboração e envio de declarações fiscais, garantindo o cumprimento das obrigações tributárias.</p>
                </div>
                <div className='card'>
                    <h3>Folha de pagamento</h3>
                    <p>Gerenciamos a folha de pagamento, incluindo cálculos de salários, encargos sociais, benefícios e obrigações trabalhistas.</p>
                </div>
            </div>
    </section>
    )
}

export default Servicos