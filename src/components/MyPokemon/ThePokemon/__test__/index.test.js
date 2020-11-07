import React from 'react';
import ReactDOM from 'react-dom';
import ThePokemon from 'components/MyPokemon/ThePokemon';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup)

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<ThePokemon></ThePokemon>, div)
})

it("Renders nick correctly", () => {
    const {getByTestId} =  render(<ThePokemon nick="balba"></ThePokemon>)
    expect(getByTestId('nick')).toHaveTextContent("balba")
})

it("Renders pokemon correctly", () => {
    const {getByTestId} =  render(<ThePokemon pokename="balbasaur"></ThePokemon>)
    expect(getByTestId('pokename')).toHaveTextContent("balbasaur")
})

it("Matched", () => {
    const tree = renderer.create(<ThePokemon nick="balba" pokename="balbasaur"></ThePokemon>).toJSON();
    expect(tree).toMatchSnapshot();
})