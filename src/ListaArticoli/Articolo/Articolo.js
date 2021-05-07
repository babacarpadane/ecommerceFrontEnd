import React from 'react';
import './Articolo.css'

const articolo = (props) => {
    return (
        <div className="articolo">
            <img src={props.image} className="immagine" alt="" />
            <h2 className="nomeArticolo">{props.nomeArticolo}</h2>
            <p>Codice articolo: {props.codiceArticolo}</p>
            {(props.disponibilita < 1) ? <p className="nonDisponibile">Prodotto non disponibile</p>
                : <p className="disponibile">Disponibilità immediata</p>}
            <p className="prezzo">Prezzo: {props.prezzoUnitario} €</p>
            <button className="aggiungiAlCarrello"
                onClick="">Aggiungi al carrello</button>
        </div>
    );
}

export default articolo;