import React, { useEffect, useState } from "react";
import {
  addPokemonToFavourites,
  getAllPokemons,
  getPokemonDetails,
  removePokemonFromFavourites,
} from "../services/apiFetch";
import { useNavigate } from "react-router";
import fTrue from "../imgs/f_true.png";
import fFalse from "../imgs/f_false.png";

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

  const changeFavouriteState = (pokemonId, stateFav) => {
    stateFav
      ? removePokemonFromFavourites(pokemonId)
      : addPokemonToFavourites(pokemonId),
      loadData();
    loadData();
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

              <img
                src={p.fav ? fTrue : fFalse}
                onClick={() => changeFavouriteState(p._id, p.fav)}
                className="img-fav"
              ></img>

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
