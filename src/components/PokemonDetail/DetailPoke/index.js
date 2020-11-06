// Dependencies
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
// Internals
import 'components/PokemonDetail/DetailPoke/index.css'

export default function Index({pokeDetail}) {
    const [styleDisplay, setStyleDisplay] = useState('d-none');

    const IsSuccess = () => {
        const probability = Math.random() < 0.5;
        let className = "btn btn-outline-success ml-3 ";
        if(probability === true ){
            className +=  "d-block";
            setStyleDisplay(className)
            alert('Successfully Caught');
        }else{
            className +=  "d-none";
            setStyleDisplay(className)
            alert('Failed');
        }
    }

    return (
        <div className="container DetPoke">  
            <div className="row mt-5">
                <div className="col mr-5 DetPoke-1">
                    <img src={pokeDetail.sprites.front_default} alt="thePoke" width={150}></img>
                </div>
                <div className="col DetPokeCol-2">
                    <span className="badge badge-success m-2">Names</span>
                    <h3 className="text-left">{pokeDetail.name}</h3>
                    <span className="badge badge-success m-2">Moves</span>
                    <ul>
                        {pokeDetail.moves.map(move=>
                            <li>
                                {move.move.name}
                            </li>)}
                    </ul>
                    <span className="badge badge-success m-2">Types</span>
                    {pokeDetail.types.map(type=>
                        <div className="badge">
                            {type.type.name}
                        </div>)}
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <button onClick={() => IsSuccess()} className="btn btn-danger">Catch</button>
                <NavLink className={styleDisplay} to={`/thePokemon/${pokeDetail.id}`}>Get It</NavLink>
            </div>
        </div>
    )
}

