import { useLocation, useNavigate } from "react-router";
import PokemonComponent from "../components/PokemonComponent";
import { deletePokemon } from "../services/apiFetch";
import { useState } from "react";

const DetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [pokemonData, setPokemonData] = useState(state.pokemonToShow);

  const delPokemon = (pokemonId) => {
    deletePokemon(pokemonId);
    navigate("/");
  };

  const updatePokemon = (editedPokemon) => {
    setPokemonData(editedPokemon)
  }
  return (
    <div>
      <PokemonComponent
        pokemonData={pokemonData}
        delPokemon={() => delPokemon(pokemonData._id)}
        updatePokemon={updatePokemon}
        detailsMode
      />
    </div>
  );
};

export default DetailsPage;
