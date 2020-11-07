// Dependencies
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
// Internals
import 'components/PokemonDetail/DetailPoke/index.css'

export default function Index({pokeDetail}) {
    const [styleDisplay, setStyleDisplay] = useState('d-none');
    const [btnDisplay, setbtnDisplay] = useState('btn btn-danger');

    const IsSuccess = () => {
        const probability = Math.random() < 0.5;
        let className = "btn btn-outline-success ";
        if(probability === true ){
            className +=  "d-block";
            const btnClass = "d-none";
            setStyleDisplay(className)
            setbtnDisplay(btnClass)
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
                    <img data-testid="imgPoke" src={pokeDetail.sprites.front_default} alt="thePoke" width={150}></img>
                </div>
                <div className="col DetPokeCol-2">
                    <span className="badge badge-success m-2">Names</span>
                    <h3 className="text-left" data-testid="nameDetail">{pokeDetail.name}</h3>
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
                <button onClick={() => IsSuccess()} className={btnDisplay}>Catch</button>
                <NavLink data-testid="idDetail" className={styleDisplay} to={`/thePokemon/${pokeDetail.id}`}>Get It</NavLink>
            </div>
        </div>
    )
}

