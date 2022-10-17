import React, {useState} from 'react';

import './style.css';

export default function InitialPage () {

    const [ numeroAleatorio, setNumeroAleatorio ] = useState(0);

    function gerarNumero() {
        const novoNumero = Math.floor(Math.random() * (100 -1) + 1);
        setNumeroAleatorio(novoNumero)
    }



    return (
        <body className='conteudo-centro'>
            <h3>Sorteador de números:</h3>
            <p>De 0 a 100</p>
            <h1>{numeroAleatorio}</h1>

            <div className='box-btn'>
                <label>
                    Click no botão a baixo para gerar um número aleatório:
                </label>

                <button onClick={gerarNumero}>
                    Gerar número
                </button>
            </div>
        </body>
    )
}