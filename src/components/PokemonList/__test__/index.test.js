import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from 'components/PokemonList';

import '@testing-library/jest-dom';

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Pokemon></Pokemon>, div)
})