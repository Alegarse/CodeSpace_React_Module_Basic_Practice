import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import PokemonComponent from '../components/PokemonComponent';
import { deletePokemon, modifyPokemon } from '../services/apiFetch';

const DetailsPage = () => {

  const navigate = useNavigate()

  const [editedPokemon, setEditedPokemon ] = useState({})

  const delPokemon = (pokemonId) => {
    deletePokemon(pokemonId)
    navigate("/")

  }

  const editPokemon = (pokemonId, pokemonModified) => {
    modifyPokemon(pokemonId,pokemonModified)
  }
 
  const location = useLocation();
  const { state } = location
  const pokemonData = state.pokemonToShow
  return (
    <div>
      <h2>Detalles del pokemon: {pokemonData.name}</h2>
      <PokemonComponent pokemonData={pokemonData} delPokemon={() =>delPokemon(pokemonData._id)} modifyPokemon={() => editPokemon(pokemonData._id, editedPokemon)} />
    </div>
  )
}

export default DetailsPage