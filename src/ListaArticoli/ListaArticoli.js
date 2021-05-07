import React from 'react';
import Articolo from './Articolo/Articolo.js'
import './ListaArticoli.css';

const ListaArticoli = (props) => {
    return (
        <div className="listaArticoli">
            {/* <table> */}
                {/* <tr> */}
                    {props.articoli.map(art => {
                        // if (props.articoli.indexOf(art) % 3 === 0) {
                            return (
                                // <tr>
                                    <Articolo
                                        key={props.articoli.indexOf(art)}
                                        image={art.image}
                                        codiceArticolo={art.codiceArticolo}
                                        nomeArticolo={art.nomeArticolo}
                                        disponibilita={art.disponibilita}
                                        prezzoUnitario={art.prezzoUnitario}
                                    />
                                // </tr>
                            )
                        // } else {
                        //     <Articolo
                        //         key={props.articoli.indexOf(art)}
                        //         image={art.image}
                        //         codiceArticolo={art.codiceArticolo}
                        //         nomeArticolo={art.nomeArticolo}
                        //         disponibilita={art.disponibilita}
                        //         prezzoUnitario={art.prezzoUnitario}
                        //     />
                        // }
                    })}
                {/* </tr> */}
            {/* </table> */}
        </div>
    );
}

export default ListaArticoli;