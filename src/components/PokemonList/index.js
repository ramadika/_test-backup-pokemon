// Dependencies
import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from 'components/PokemonContext';
// Internals
import 'components/PokemonList/index.css'
import Pokemon from 'components/PokemonList/Pokemon'

export default function Index() {
    const context = useContext(PokemonContext)

    const [pokemonData, setPokemonData] = useState([])
    const [isLoaded, setLoading] = useState(context.isLoaded);
  
    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(context.initialURL)
        await loadPokemon(response.results);
        setLoading(true);
      }
      fetchData();
    })
  
    const loadPokemon = async (data) => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
      }))
      setPokemonData(_pokemonData); 
    } 

    if(!isLoaded){
        return <div><h1 className="text-center pt-5">Loading...</h1></div>
    }else{
        return (
                <div className="ListPoke mt-3">
                    <h1 className="text-center">Pokemon List</h1>
                    <h6 className="text-center mb-4">Total Owned <span className="badge badge-success"> {context.total}</span></h6>
                    {pokemonData.map(pokemon => 
                    <Pokemon key={pokemon.id} pokemon={pokemon} total={context.total}/>)}
                </div>
        )
    }
}

export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}