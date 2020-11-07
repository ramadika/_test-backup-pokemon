import React from 'react';
import ReactDOM from 'react-dom';
import AllPoke from 'components/MyPokemon/AllMyPokemon';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup)

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<AllPoke></AllPoke>, div)
})

it("Renders nickname correctly", () => {
    const {getByTestId} =  render(<AllPoke nickname="Balba"></AllPoke>)
    expect(getByTestId('nickname')).toHaveTextContent("Balba")
})

it("Renders pokemon correctly", () => {
    const {getByTestId} =  render(<AllPoke thePoke="balbasaur"></AllPoke>)
    expect(getByTestId('thePoke')).toHaveTextContent("balbasaur")
})

it("Matched", () => {
    const tree = renderer.create(<AllPoke nickname="Balba" thePoke="balbasaur"></AllPoke>).toJSON();
    expect(tree).toMatchSnapshot();
})