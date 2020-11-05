import React, { useState, useEffect, useContext } from 'react';
import Pokemon from './Pokemon'
import 'components/PokemonList/index.css'
import { PokemonContext } from 'components/PokemonContext';

export default function Index() {
    const context = useContext(PokemonContext)

    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'
  
    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(initialURL)
        await loadPokemon(response.results);
        setLoading(false);
      }
      fetchData();
    }, [])
  
    const loadPokemon = async (data) => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
      }))
      setPokemonData(_pokemonData); 
    } 

    return (
        <div className="container">
            {loading ? <h1 className="text-center pt-5">Loading...</h1> : (
            <>
                <div className="ListPoke mt-3">
                    <h1 className="text-center pt-5">Pokemon List</h1>
                    <h6 className="text-center mb-4">Total Owned <span className="badge badge-success"> {context.total}</span></h6>
                    {pokemonData.map(pokemon => 
                        <Pokemon key={pokemon.id} pokemon={pokemon} total={context.total}/>)}
                </div>
            </>
            )}
        </div>
    )
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