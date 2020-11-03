import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import 'components/MyPokemon/AllMyPokemon/index.css'

export default function Index() {
    const [pokemons, setPokemons] = useState({
        pokes : [
            { id:1, nickName: 'Purwanto', thePoke: 'Balbasaur'},
            { id:2, nickName: 'Aris', thePoke: 'Ivysaur'},
            { id:3, nickName: 'Insir', thePoke: 'Venusaur'},
            { id:4, nickName: 'Kurti', thePoke: 'Charmander'},
            { id:5, nickName: 'Mosis', thePoke: 'Charmeleon'},
        ]
    })

    const handleDelete = id => {
        const pokes = pokemons.pokes.filter(c => c.id !== id);
        setPokemons({pokes});
    }


    return (
        <div className="allPoke">
            <h1 className="my-5 text-center">My Pokemon</h1>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Nickname</th>
                    <th>Pokemon</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    pokemons.pokes.map(pkn =>
                        <tr>
                            <td ><span className="badge badge-light">{pkn.nickName}</span></td>
                            <td><span className="badge badge-light">{pkn.thePoke}</span></td>
                            <td ><button onClick={() => handleDelete(pkn.id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)
                }
                </tbody>
            </Table>
        </div>
    )
}
