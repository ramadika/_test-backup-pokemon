import React from 'react';
import { NavLink } from 'react-router-dom'
import 'components/PokemonDetail/DetailPoke/index.css'

export default function Index({pokeDetail}) {

    return (
        <div className="container DetPoke">  
            <div className="row mt-5">
                <div className="col mr-5 DetPoke-1">
                    <img src={pokeDetail.sprites.front_default} alt="thePoke" width={150}></img>
                </div>
                <div className="col DetPokeCol-2">
                    <span className="badge badge-primary m-2">Names</span>
                    <h3 className="text-left">{pokeDetail.name}</h3>
                    <span className="badge badge-primary m-2">Moves</span>
                    <ul>
                        {pokeDetail.moves.map(move=>
                            <li>
                                {move.move.name}
                            </li>)}
                    </ul>
                    <span className="badge badge-primary m-2">Types</span>
                    {pokeDetail.types.map(type=>
                        <div className="badge">
                            {type.type.name}
                        </div>)}
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <button className="btn btn-danger"><NavLink to={`/thePokemon/${pokeDetail.id}`}>Catch</NavLink></button>
            </div>
        </div>
    )
}

