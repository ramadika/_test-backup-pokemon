import React from 'react';
import ReactDOM from 'react-dom';
import DetailPoke from 'components/PokemonDetail/DetailPoke';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import renderer from 'react-test-renderer';

afterEach(cleanup)

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<DetailPoke></DetailPoke>, div)
})

it("Renders id correctly", () => {
    const {getByTestId} =  render(<DetailPoke idDetail="1"></DetailPoke>)
    expect(getByTestId('idDetail')).toHaveTextContent("1")
})

it("Renders pokemon correctly", () => {
    const {getByTestId} =  render(<DetailPoke nameDetail="balbasaur"></DetailPoke>)
    expect(getByTestId('nameDetail')).toHaveTextContent("balbasaur")
})

it("Matched", () => {
    const tree = renderer.create(<DetailPoke idDetail="1" nameDetail="balbasaur"></DetailPoke>).toJSON();
    expect(tree).toMatchSnapshot();
})