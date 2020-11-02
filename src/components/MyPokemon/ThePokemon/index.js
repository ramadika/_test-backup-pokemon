import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export class index extends Component {
    render() {
        const { thePoke } = this.props;
        return (
            <div>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Pokemon</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {thePoke.map(poke => 
                        <tr>
                            <td ><span className="badge badge-light">{poke.nickname}</span></td>
                            <td ><span className="badge badge-info">{poke.name}</span></td>
                            <td ><button className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default index
