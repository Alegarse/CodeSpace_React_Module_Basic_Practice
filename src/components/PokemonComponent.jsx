import React, { useState } from "react";
import { useNavigate } from "react-router";

const PokemonComponent = (props) => {
  let { savePokemon, delPokemon, modifyPokemon, createMode, editMode, pokemonData } = props;
  const [newPokemon, setNewPokemon] = useState({});

  const navigate = useNavigate();

  const pokemonHandler = (propName, propValue) => {
    setNewPokemon({
      ...newPokemon,
      [propName]: propValue,
    });
  };

  const cancel = () => {
    navigate("/");
  };

  const showError = (message) => {
    const error = document.querySelector(".error_message");
    error.style.visibility = "visible";
    error.textContent = message;
    setTimeout(() => {
      error.style.visibility = "hidden";
    }, 2000);
  };

  const validateFields = (pokemon) => {
    let isError = false;
    let errorMessage = "";
    if (!pokemon.name || pokemon.name === "") {
      errorMessage = "El nombre no puede estar vacio";
      isError = true;
    } else if (!pokemon.url || pokemon.url === "") {
      errorMessage = "La url no puede estar vacía";
      isError = true;
    } else if (!pokemon.height || pokemon.height === "") {
      errorMessage = "El peso no puede estar vacio";
      isError = true;
    } else if (!pokemon.weight || pokemon.weight === "") {
      errorMessage = "El ancho no puede estar vacio";
      isError = true;
    } else if (!pokemon.type || pokemon.type === "") {
      errorMessage = "El tipo no puede estar vacio";
      isError = true;
    }
    if (isError) {
      showError(errorMessage);
    } else {
      savePokemon(newPokemon);
    }
  };

  return (
    <div>
      <div className="data-create-container">
        <div className="input-row">
          <span>Nombre: </span>
          {createMode ? (
            <input
              type="text"
              onChange={(p) => pokemonHandler("name", p.target.value)}
            />
          ) : (
            <span>{pokemonData?.name}</span>
          )}
        </div>
        <div className="input-row">
          <span>Url: </span>
          {createMode ? (
            <input
              type="text"
              onChange={(p) => pokemonHandler("url", p.target.value)}
            />
          ) : (
            <span>{pokemonData?.url}</span>
          )}
        </div>
        <div className="input-row">
          <span>Altura: </span>
          {createMode ? (
            <input
              type="text"
              onChange={(p) => pokemonHandler("height", p.target.value)}
            />
          ) : (
            <span>{pokemonData?.height}</span>
          )}
        </div>
        <div className="input-row">
          <span>Ancho: </span>
          {createMode ? (
            <input
              type="text"
              onChange={(p) => pokemonHandler("weight", p.target.value)}
            />
          ) : (
            <span>{pokemonData?.weight}</span>
          )}
        </div>
        <div className="input-row">
          <span>Tipo: </span>
          {createMode ? (
            <input
              type="text"
              onChange={(p) => pokemonHandler("type", p.target.value)}
            />
          ) : (
            <ul>
              {
                pokemonData.type.map((type, idx) => (
                  <li key={idx}>{type}</li>
                ))
              }
            </ul>
          )}
        </div>
      </div>
      <div className="buttons-create-container">
        {createMode ? (
          <button
            className="btn-create"
            onClick={() => {
              validateFields(newPokemon);
            }}
          >
            Crear Pokemon
          </button>
        ) : (
          <>
          <button className="btn-delete" onClick={delPokemon}>
            Eliminar
          </button>
          <button className="btn-modify" onClick={modifyPokemon}>
            Modificar
          </button>
          </>
        )}
        <button className="btn-cancel" onClick={cancel}>
          Cancelar
        </button>
      </div>
      <div className="error_message">\u200B</div>
    </div>
  );
};

export default PokemonComponent;
