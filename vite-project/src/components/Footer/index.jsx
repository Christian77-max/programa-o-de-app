// src\components\Footer\index.jsx

import './style.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div>
                    <strong>Contabilidade Dendezeiros</strong> - CNPJ: 00.000.000/0001-00
                </div>
                <div>
                    Rua dos Bobos, 0 - Centro - São Paulo/SP
                </div>
                <div className='copy'>
                    © {new Date().getFullYear()} - Todos os direitos reservados.  
                </div>
            </div>
        </footer>
    )
}

export default Footer