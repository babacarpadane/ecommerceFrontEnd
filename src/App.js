import ListaArticoli from './ListaArticoli/ListaArticoli.js'
import Articolo from './ListaArticoli/Articolo/Articolo.js'
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [articoli, setArticoli] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/api/articolo"
    axios.get(url).then(listArt => setArticoli(listArt.data))
  }, [])

  return (
    <div className="App">
      {/* <ListaArticoli articoli={articoli}/> */}
      {articoli.map(art => {
        return (
          <Articolo
            key={articoli.indexOf(art)}
            image={art.image}
            codiceArticolo={art.codiceArticolo}
            nomeArticolo={art.nomeArticolo}
            disponibilita={art.disponibilita}
            prezzoUnitario={art.prezzoUnitario}
          />
        )
      })}
    </div>
  );
}

export default HomePage;
