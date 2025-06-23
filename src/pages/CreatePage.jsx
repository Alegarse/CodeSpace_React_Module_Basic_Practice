import { Navigate, useNavigate } from "react-router";
import PokemonComponent from "../components/PokemonComponent";
import { createNewPokemon } from "../services/apiFetch";

const CreatePage = () => {
  
  const navigate = useNavigate();

  const createPokemonFetch = (newPokemon) => {
    createNewPokemon(newPokemon);
    navigate("/");
  };

  return (
    <div>
      <PokemonComponent savePokemon={createPokemonFetch} createMode />
    </div>
  );
};

export default CreatePage;
