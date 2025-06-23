import { v4 as uuidv4 } from 'uuid'

let pokemonsList = [
    {
        _id: uuidv4(),
        name: "Ditto",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        height: 3,
        weight: 40,
        type: ["normal"],
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" 
    },
    {
        _id: uuidv4(),
        name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
        height: 4,
        weight: 60,
        type: ["Electric"],
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" 
    },
    {
        _id: uuidv4(),
        name: "Charizard",
        url: "https://pokeapi.co/api/v2/pokemon/charizard",
        height: 17,
        weight: 905,
        type: ["fire", "flying"],
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" 
    },
]


let favouritePokemons = []

export const getAllPokemons = () => {
    return pokemonsList.map(p => {
        return {
            _id: p._id,
            name: p.name,
            url: p.url
        }
    })
}

export const getPokemonDetails = (pokemonId) => {
    return pokemonsList.find(p => p._id === pokemonId)
}

export const deletePokemon = (pokemonId) => {
    const pokemonListAux = pokemonsList.filter(p => p._id !== pokemonId)
    pokemonsList = pokemonListAux
}

export const modifyPokemon = (pokemonId, pokemonModified) => {
    const auxList = favouritePokemons.filter(p => p._id !== pokemonId)
    auxList.push(pokemonModified)
    favouritePokemons = auxList
}

export const addPokemonToFavourites = (pokemonId) => {
    favouritePokemons.push(pokemonId)
}

export const createNewPokemon = (newPokemon) => {
    const auxPokemon = {
        ...newPokemon,
        _id: uuidv4(),
        type: newPokemon.type.split(",")
    }
    pokemonsList.push(auxPokemon)
}

