import React from 'react';
import './Articolo.css'

const articolo = (props) => {
    return (
        <div className="articolo">
            <img src={props.image} className="immagine" />
            <h2 className="nomeArticolo">{props.nomeArticolo}</h2>
            <p>Codice articolo: {props.codiceArticolo}</p>
            <p>Dispnibilità: {props.disponibilita}</p>
            <p className="prezzo">Prezzo: {props.prezzoUnitario} €</p>
        </div>
    );
}

export default articolo;