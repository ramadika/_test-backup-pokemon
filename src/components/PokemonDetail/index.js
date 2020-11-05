import React, { useState, useEffect } from 'react';
import DetailPoke from 'components/PokemonDetail/DetailPoke'
import 'components/PokemonDetail/index.css'

export default function Index(props) {
    const [pokeDetail, setPokeDetail] = useState([]);
    const [isLoaded, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch("https://pokeapi.co/api/v2/pokemon/"+props.match.params.id, {signal: signal})
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
        return <div>Loading</div>
    }else{
        return (
            <div className="container PokeDet">
                <h1 className="text-center">Pokemon Detail</h1>
                <DetailPoke pokeDetail={pokeDetail} />
            </div>
        )
    }
}

