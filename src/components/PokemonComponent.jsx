import React, { useEffect, useState } from "react";
import { UNSAFE_decodeViaTurboStream } from "react-router";
import { useNavigate } from "react-router";
import { createNewPokemon, modifyPokemon } from "../services/apiFetch";

const PokemonComponent = (props) => {
  const { delPokemon, createMode, pokemonData, detailsMode, updatePokemon } = props;
  const [newPokemon, setNewPokemon] = useState({});
  const [editedPokemon, setEditedPokemon] = useState({});
  let [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const pokemonHandler = (propName, propValue) => {
    setNewPokemon({
      ...newPokemon,
      [propName]: propValue,
    });
  };

  const pokemonHandlerSave = (propName, propValue) => {
    setEditedPokemon({
      ...editedPokemon,
      [propName]: propValue,
    });
  };

  const cancel = () => {
    navigate("/");
  };

  const savePokemon = (pokemonId, editedPokemon) => {
    modifyPokemon(pokemonId, editedPokemon);
    updatePokemon(editedPokemon)
    changeEditMode();
  };

  const createPokemon = () => {
    createNewPokemon(newPokemon)
    cancel()
  }

  const changeEditMode = () => {
    editMode ? setEditMode(false) : setEditMode(true);
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
      createPokemon();
    }
  };

  useEffect(() => {
    if (!createMode && pokemonData) {
      setEditedPokemon(pokemonData);
    }
  }, [createMode, pokemonData]);

  return (
    <div>
      <div className="data-create-container">
        {editMode ? (
          <h2>Edición del pokemon: {pokemonData.name}</h2>
        ) : detailsMode ? (
          <h2>Detalles del pokemon: {pokemonData.name}</h2>
        ) : (
          <h2>Creación de nuevo Pokemon</h2>
        )}
        <div className="input-row">
          <span>Nombre: </span>
          {createMode ? (
            <input
              type="text"
              onChange={(p) => pokemonHandler("name", p.target.value)}
            />
          ) : editMode ? (
            <input
              type="text"
              value={editedPokemon?.name}
              onChange={(p) => pokemonHandlerSave("name", p.target.value)}
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
          ) : editMode ? (
            <input type="text" value={pokemonData?.url} disabled />
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
          ) : editMode ? (
            <input type="text" value={pokemonData?.height} disabled />
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
          ) : editMode ? (
            <input type="text" value={pokemonData?.weight} disabled />
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
          ) : editMode ? (
            <input type="text" value={pokemonData?.type} disabled />
          ) : (
            <ul>
              {pokemonData.type.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
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
            {editMode ? (
              <>
                <button
                  className="btn-save"
                  onClick={() => savePokemon(pokemonData._id, editedPokemon)}
                >
                  Guardar
                </button>
                <button className="btn-cancel" onClick={changeEditMode}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <button className="btn-delete" onClick={delPokemon}>
                  Eliminar
                </button>
                <button className="btn-modify" onClick={changeEditMode}>
                  Modificar
                </button>
                <button className="btn-cancel" onClick={cancel}>
                  Cancelar
                </button>
              </>
            )}
          </>
        )}
      </div>
      <div className="error_message">\u200B</div>
    </div>
  );
};

export default PokemonComponent;
