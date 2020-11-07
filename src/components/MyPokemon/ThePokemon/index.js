// Dependencies
import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { PokemonContext } from 'components/PokemonContext';
// Internals
import 'components/MyPokemon/ThePokemon/index.css'

export default function Index(props) {
    const context = useContext(PokemonContext)

    const [thePoke, setThePoke] = useState([]);
    const [nickName, setNickName] = useState('');
    const URL = context.initialURL+props.match.params.id;
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch(URL, {signal: signal})
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
                    <h4 className="text-left" data-testid="nick">{nickName}</h4>
                    <span className="badge badge-success m-2">Pokemon</span>
                    <h3 className="text-left" data-testid="pokename">{thePoke.name}</h3>
                    <NavLink to="/allmypoke"><button onClick={() => context.handleAdd(nickName,thePoke.name)} className="btn btn btn-outline-success btn-sm mt-3">Add</button></NavLink>
                </div>
                <h6 className="ml-2 my-5"><b>Notes:</b> Click <span className="badge badge-success"> Add </span> to add your pokemon to <b>My Pokemon List</b></h6>
            </div>
        )
    }
}
