import React from 'react';
import ReactDOM from 'react-dom';
import PokemonDetail from 'components/PokemonDetail';

import '@testing-library/jest-dom';

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<PokemonDetail></PokemonDetail>, div)
})