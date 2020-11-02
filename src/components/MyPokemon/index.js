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
            <div className="text-center myPoke">
                <h1 className="my-3">My Pokemon</h1>
                <ThePokemon thePoke={this.state.thePoke}/>
            </div>
        )
    }
}

export default index
