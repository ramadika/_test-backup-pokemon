import React from 'react';
import { NavLink } from 'react-router-dom'
import ImgBg from 'assets/img/atul-vinayak-J8c1hkwrr-8-unsplash.jpg'
import './App.css';

function App() {

  return (
    <div>
      <img src={ImgBg} alt="BgImg" className="imgBg"></img>
      <div className=" pokeApp">
        <h1>Pokemon</h1>
        <div>
          <button className="btn btn-outline-success"><NavLink to="/pokemonList">Pokemon List</NavLink></button>
        </div>
        <div>
          <button className="btn btn-outline-success"><NavLink to="/allmypoke">My Pokemon</NavLink></button>
        </div>
      </div>
    </div>
  );
}

export default App;
