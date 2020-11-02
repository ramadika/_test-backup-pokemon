import React, { Component } from 'react'
import ThePokemon from 'components/MyPokemon/ThePokemon'
import 'components/MyPokemon/index.css'

export class index extends Component {
    state = {
        thePoke : [
            { id: 1, name: 'Ditto', nickname: 'mine' },
            { id: 2, name: 'Pika', nickname: 'yours' },
            { id: 3, name: 'Turtle', nickname: 'us' },
            { id: 4, name: 'Pink', nickname: 'who' },
        ]
    }
    render() {
        return (
            <div>
                <div className="text-center myPoke mb-5">
                    <h1 className="my-5">My Pokemon</h1>
                    <ThePokemon thePoke={this.state.thePoke}/>
                </div>
                <div className="text-center mt-5">
                    <span className="badge badge-light m-2">Nickname</span>
                    <span className="badge badge-info m-2">Pokemon</span>
                </div>
            </div>
        )
    }
}

export default index
