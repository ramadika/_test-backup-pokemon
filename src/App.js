// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom'
// Internals
import ImgBg from 'assets/img/atul-vinayak-J8c1hkwrr-8-unsplash.jpg'
import './App.css';

function App() {

  return (
    <div>
      <img src={ImgBg} alt="BgImg" className="imgBg"></img>
      <div className=" pokeApp">
        <h1>Pokemon</h1>
        <div>
          <NavLink className="btn btn-outline-success" to="/pokemonList">Pokemon List</NavLink>
        </div>
        <div>
          <NavLink className="btn btn-outline-success" to="/allmypoke">My Pokemon List</NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
