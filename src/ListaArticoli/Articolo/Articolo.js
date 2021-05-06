import React from 'react';
import './Articolo.css'

const articolo = (props) => {
    return (
        <div className="articolo">
            <h2 className="nomeArticolo">Nome articolo: {props.nomeArticolo}</h2>
            <p>Codice articolo: {props.codiceArticolo}</p>
            <p>Dispnibilità: {props.disponibilita}</p>
        </div>
    );
}

export default articolo;