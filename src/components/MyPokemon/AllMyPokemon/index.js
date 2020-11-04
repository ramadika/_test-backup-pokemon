import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table'
import 'components/MyPokemon/AllMyPokemon/index.css'
import { PokemonContext } from '..';

export default function Index() {
    const context = useContext(PokemonContext)

    console.log(context.allPokes);
    return (
        <div className="allPoke">
            <h1 className="my-5 text-center">My Pokemon</h1>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th className="pl-4">Nickname</th>
                    <th>Pokemon</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    context.allPokes.map(pkn =>
                        <tr>
                            <td className="pl-4"><span className="badge badge-light">{pkn.nickName}</span></td>
                            <td><span className="badge badge-light">{pkn.thePoke}</span></td>
                            <td><button onClick={() => context.handleDelete(pkn.id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)
                }
                </tbody>
            </Table>
            <h6>{context.allPokes.nickName}</h6>
        </div>
    )
}
