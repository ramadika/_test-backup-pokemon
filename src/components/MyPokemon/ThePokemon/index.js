import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import 'components/MyPokemon/ThePokemon/index.css'

export default function Index(props) {
    const [thePoke, setThePoke] = useState([]);
    const [nickName, setNickName] = useState('');
    const [arrMyPoke, setArrMyPoke] = useState([]);
    // const [arrMyPoke, setArrMyPoke] = useReducer(arrMyPokeReducer, [], () => {
    //     const localdata = localStorage.getItem('dataCart');
    //     return localdata ? JSON.parse(localdata) : [];
    // })
    

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

    const addItem = (id) => {
        setArrMyPoke([...arrMyPoke, {
            id: arrMyPoke.length,
            ThePokemon: thePoke.name,
            nickName: nickName,
        }])
        console.log(thePoke.name);
        console.log(nickName);
        console.log(id);
        alert('Successfully Added')
    }

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(arrMyPoke))
    })

    if(!nickName){
        var resultnickName = prompt("Please enter your name:", "");
        return setArrMyPoke([...arrMyPoke, {
            id: arrMyPoke.length,
            ThePokemon: thePoke.name,
            nickName: setNickName(resultnickName),
        }]);
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
                        <td ><button onClick={() => addItem(thePoke.id)} className="btn btn-danger btn-sm">Add</button></td>
                    </tr>
                    </tbody>
                </Table>
                <ul>
                    {
                        arrMyPoke.slice(1).map(p => 
                            <li>
                                {p.ThePokemon} | {p.nickName}
                            </li>)
                    }
                </ul>
                <span className="badge badge-info text-center ml-2 mt-5">Click Add to add your pokemon to MyPokemon</span>
            </div>
        )
    }
}
