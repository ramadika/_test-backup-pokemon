import React, { useState, useEffect } from 'react';
import ThePokemon from 'components/MyPokemon/ThePokemon'
import 'components/MyPokemon/index.css'

export default function Index(props) {
    const [thePoke, setThePoke] = useState([]);
    const [nickName, setNickName] = useState('');
    const [arrMyPoke, setArrMyPoke] = useState([{
        id:1,
        ThePokemon:'',
        nickName: '',
    }]);
    

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch("https://pokeapi.co/api/v2/pokemon/", {signal: signal})
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

    const addItem = () => {
        setArrMyPoke([...arrMyPoke, {
            id: arrMyPoke.length,
            ThePokemon: thePoke.name,
            nickName: '',
        }])
    }

    if(!nickName){
        var resultnickName = prompt("Please enter your name:", "");
        return setArrMyPoke([...arrMyPoke, {
            id: arrMyPoke.length,
            ThePokemon: thePoke.name,
            nickName: setNickName(resultnickName),
        }]);
    }else{
        return (
            <div>
                <div className="text-center myPoke mb-5">
                    <h1 className="my-5">You Get It</h1>
                    <ThePokemon thePoke={thePoke} nickName={nickName} onAdd={addItem}/>
                </div>
                <div className="text-center mt-5">
                    <span className="badge badge-light m-2">Nickname</span>
                    <span className="badge badge-info m-2">Pokemon</span>
                </div>
            </div>
        )
    }
}
