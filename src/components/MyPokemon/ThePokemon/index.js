import React, { useState, useEffect, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import 'components/MyPokemon/ThePokemon/index.css'
import { PokemonContext } from '..';

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
            <div className="thePoke">
                <h1 className="my-5 text-center">You Get It</h1>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Pokemon</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td ><span className="badge badge-light">{nickName}</span></td>
                        <td><span className="badge badge-info">{thePoke.name}</span></td>
                        <td ><button onClick={() => context.addItem(nickName,thePoke.name)} className="btn btn-success btn-sm">Add</button></td>
                    </tr>
                    </tbody>
                </Table>
                <span className="badge badge-info text-center ml-2 mt-5">Click Add to add your pokemon to MyPokemon</span>
            </div>
        )
    }
}
