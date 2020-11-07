import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from 'components/PokemonList/Pokemon';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup)

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Pokemon></Pokemon>, div)
})

it("Renders id correctly", () => {
    const {getByTestId} =  render(<Pokemon id="1"></Pokemon>)
    expect(getByTestId('id')).toHaveTextContent("1")
})

it("Renders pokemon correctly", () => {
    const {getByTestId} =  render(<Pokemon pokemon="balbasaur"></Pokemon>)
    expect(getByTestId('pokemon')).toHaveTextContent("balbasaur")
})

it("Matched", () => {
    const tree = renderer.create(<Pokemon id="1" pokemon="balbasaur"></Pokemon>).toJSON();
    expect(tree).toMatchSnapshot();
})