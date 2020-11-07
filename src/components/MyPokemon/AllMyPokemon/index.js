// Dependencies
import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { PokemonContext } from 'components/PokemonContext';
// Internals
import 'components/MyPokemon/AllMyPokemon/index.css'

export default function Index() {
    const context = useContext(PokemonContext)

    return (
        <div className="allPoke container">
            <h1 className="mb-5 text-center">My Pokemon List</h1> 
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
                            <td className="pl-4" data-testid="nickname"><span className="badge badge-light">{pkn.nickName}</span></td>
                            <td className="text-capitalize" data-testid="thePoke"><span className="badge badge-light">{pkn.thePoke}</span></td>
                            <td><button onClick={() => context.handleDelete(pkn.id)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)
                }
                </tbody>
            </Table>
        </div>
    )
}
