import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import 'components/MyPokemon/ThePokemon/index.css'
import { PokemonContext } from 'components/PokemonContext';

export default function Index(props) {
    const context = useContext(PokemonContext)

    const [thePoke, setThePoke] = useState([]);
    const [nickName, setNickName] = useState('');
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch("https://pokeapi.co/api/v2/pokemon/"+props.match.params.id, {signal: signal})
        .then(res => res.json())
        .then(
            (result) => {
                setThePoke(result);
            }
        );
        
        return function cleanup(){
            abortController.abort();
        }
    })

    if(!nickName){
        var resultnickName = prompt('Please Enter the NickName','');
        return setNickName(resultnickName);
    }else{
        return (
            <div className=" container thePoke">
                <h1 className="mb-4 text-center">You Get It!</h1>
                <div className="thePokenNick">
                    <span className="badge badge-success m-2">NickName</span>
                    <h6 className="text-left">{nickName}</h6>
                    <span className="badge badge-success m-2">Pokemon</span>
                    <h3 className="text-left">{thePoke.name}</h3>
                    <td><button onClick={() => context.handleAdd(nickName,thePoke.name)} className="btn btn btn-outline-success btn-sm mt-3"><NavLink to="/allmypoke">Add</NavLink></button></td>
                </div>
                <h6 className="ml-2 my-5"><b>Notes:</b> Click <span className="badge badge-success"> Add </span> to add your pokemon to <b>My Pokemon</b></h6>
            </div>
        )
    }
}
