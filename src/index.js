import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import App from 'App';
import BaseLayout from 'components/BaseLayout'
import PokemonList from 'components/PokemonList'
import PokemonDetail from 'components/PokemonDetail'
import ThePokemon from 'components/MyPokemon/ThePokemon'
import AllMyPokemon from 'components/MyPokemon/AllMyPokemon'
import PokemonContextProvider from 'components/PokemonContext'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <BaseLayout>
        <PokemonContextProvider>
          <Route path="/pokemonList" component={PokemonList}></Route>
          <Route path="/detail/:id" component={PokemonDetail}></Route>
          <Route path="/allmypoke" component={AllMyPokemon}></Route>
          <Route path="/thePokemon/:id" component={ThePokemon}></Route>
        </PokemonContextProvider>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
