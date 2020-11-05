import React from 'react'
import { NavLink } from 'react-router-dom'
import 'components/PokemonList/Pokemon/index.css'

export default function index(props) {
    return (
        <div className="onePokemon d-flex justify-content-center">
                <div className="card border-1 mr-5 w-75 mb-2">
                <NavLink to={`/detail/${props.pokemon.id}`}>
                    <div className="card-body">
                        <img src={props.pokemon.sprites.front_default} alt="pokeImg" width={100}></img>
                        <h5 className="card-title text-center">{props.pokemon.name}</h5>
                        {/* <p className="card-title badge badge-light">Owned Total : {props.pokemon.base_experience}</p> */}
                    </div>
                </NavLink>
                </div>
        </div>
    )
}
