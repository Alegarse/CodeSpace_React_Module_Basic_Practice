import { v4 as uuidv4 } from 'uuid'

let pokemonsList = [
    {
        _id: uuidv4(),
        name: "Ditto",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        height: 3,
        weight: 40,
        type: ["normal"],
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        fav: false 
    },
    {
        _id: uuidv4(),
        name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
        height: 4,
        weight: 60,
        type: ["Electric"],
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        fav: false 
    },
    {
        _id: uuidv4(),
        name: "Charizard",
        url: "https://pokeapi.co/api/v2/pokemon/charizard",
        height: 17,
        weight: 905,
        type: ["fire", "flying"],
        imgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
        fav: false 
    },
]

export const getAllPokemons = () => {
    return pokemonsList.map(p => {
        return {
            _id: p._id,
            name: p.name,
            url: p.url,
            fav: p.fav
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
    const auxList = pokemonsList.filter(p => p._id !== pokemonId)
    auxList.push(pokemonModified)
    pokemonsList = auxList
}

export const addPokemonToFavourites = (pokemonId) => {
    pokemonsList = pokemonsList.map(p => 
        p._id === pokemonId ? {...p, fav:true} : p
    )
}

export const removePokemonFromFavourites = (pokemonId) => {
    pokemonsList = pokemonsList.map(p => 
        p._id === pokemonId ? {...p, fav:false} : p
    )
}

export const createNewPokemon = (newPokemon) => {
    const auxPokemon = {
        ...newPokemon,
        _id: uuidv4(),
        fav: false,
        type: newPokemon.type.split(",")
    }
    pokemonsList.push(auxPokemon)
}

