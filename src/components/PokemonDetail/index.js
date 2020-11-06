// Dependencies
import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from 'components/PokemonContext';
// Internals
import 'components/PokemonDetail/index.css'
import DetailPoke from 'components/PokemonDetail/DetailPoke'

export default function Index(props) {
    const context = useContext(PokemonContext)

    const [pokeDetail, setPokeDetail] = useState([]);
    const [isLoaded, setLoading] = useState(context.isLoaded);
    const URL = context.initialURL+props.match.params.id

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch(URL, {signal: signal})
        .then(res => res.json())
        .then(
            (result) => {
                setPokeDetail(result);
                setLoading(true);
            }
        );
        
        return function cleanup(){
            abortController.abort();
        }
    })

    if(!isLoaded){
        return <div><h1 className="text-center pt-5">Loading...</h1></div>
    }else{
        return (
            <div className="container PokeDet">
                <h1 className="text-center">Pokemon Detail</h1>
                <DetailPoke pokeDetail={pokeDetail} />
            </div>
        )
    }
}

