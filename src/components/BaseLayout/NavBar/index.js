// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// Internals
import 'components/BaseLayout/NavBar/index.css'

function index() {
    return (
        <div className="Nav-Bar">
            <Navbar expand="lg">
                <NavLink className="navbar-brand" to="/">Pokemon</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/pokemonList">Pokemon List</NavLink>
                        <NavLink className="nav-link" to="/allmypoke">My Pokemon List</NavLink> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default index
