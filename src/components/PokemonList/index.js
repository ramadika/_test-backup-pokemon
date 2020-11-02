import React from 'react'
import Pokemon from './Pokemon'
import 'components/PokemonList/index.css'

export default function index(props) {
    return (
        <div className="ListPoke">
            <h1 className="text-center my-5">Pokemon List</h1>
            {props.pokemons.map(pokemon => 
                <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}
