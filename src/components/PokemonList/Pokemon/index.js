import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default function index(props) {
    return (
        <div className="onePokemon d-flex justify-content-center">
            <div className="card border-1 mr-5 w-75">
                <div className="card-body">
                    <h5 className="card-title text-capitalize"><NavLink to={`/detail/${props.pokemon.id}`}>{props.pokemon.name}</NavLink></h5>
                    <p className="card-text badge badge-light mr-5">Total Owned : {props.pokemon.base_experience}</p>
                    {/* <NavLink className="btn btn-primary" to={`/detail/${props.pokemon.id}`}>Detail</NavLink> */}
                </div>
            </div>
        </div>
    )
}
