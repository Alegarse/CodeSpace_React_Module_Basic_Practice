import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemonDetails } from "../services/apiFetch";
import { useNavigate } from "react-router";

const PokemonListComponent = () => {
  const [pokemonsList, setPokemonsList] = useState(undefined);

  const navigate = useNavigate();

  const loadData = () => {
    const listAux = getAllPokemons();
    setPokemonsList(listAux);
  };

  const showPokemonDetails = (pokemonId) => {
    const pokemonToShow = getPokemonDetails(pokemonId);
    navigate("/details", {
      state: {
        pokemonToShow,
      },
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {!pokemonsList ? (
        <div className="msg-text">Cargando Pokemons registrados...</div>
      ) : pokemonsList.length === 0 ? (
        <div className="listado-container">
          <h3 className="title-listing">
            No hay pokemons registrados en el sistema
          </h3>
        </div>
      ) : (
        <div className="listado-container">
          <h3 className="title-listing">
            Listado de pokemons registrados en el sistema
          </h3>
          {pokemonsList.map((p, idx) => (
            <div key={idx} className="pokemon-list-data">
              <div className="info-container">
                <span>
                  <b>Id: </b>
                  {p._id}
                </span>
                <span>
                  <b>Nombre: </b>
                  {p.name}
                </span>
                <span>
                  <b>Url: </b>
                  {p.url}
                </span>
              </div>
              <button
                className="btn-details"
                onClick={() => showPokemonDetails(p._id)}
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonListComponent;
