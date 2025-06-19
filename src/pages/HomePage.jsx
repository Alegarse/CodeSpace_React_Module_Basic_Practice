import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../services/apiFetch";
import MenuComponent from "../components/MenuComponent";

const HomePage = () => {
  const [pokemonsList, setPokemonsList] = useState(undefined);

  const loadData = () => {
    const listAux = getAllPokemons()
    setPokemonsList(listAux)
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Práctica básica ReactJS - Pokemons</h2>
      VOLVER A HACERLA CON UN LAYOUT!!!!!!
      <MenuComponent/>
      {
        !pokemonsList ? (
            <div className="msg-text">Cargando Pokemons registrados...</div>
        ) : pokemonsList.lenght === 0 ? (
            <div className="msg-text">No hay pokemons registrados en el sistema</div>
        ) : (
            <div className="listado-container">
            <h3 className="title-listing">Listado de pokemons registrados en el sistema</h3>
            {
                pokemonsList.map((p,idx) => (
                <div key={idx} className="pokemon-list-data">
                    <div className="photo-container">Foto</div>
                    <div className="info-container">
                        <span><b>Id: </b>{p._id}</span>
                        <span><b>Nombre: </b>{p.name}</span>
                        <span><b>Url: </b>{p.url}</span>
                    </div>
                    <button className="btn-details">Ver Detalles</button>
                </div>
            ))
            }
            </div>
            
        )
      }

    </div>
  );
};

export default HomePage;
