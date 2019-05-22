import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import { render, fireEvent, cleanup } from 'react-testing-library'

import 'jest-dom/extend-expect';

import App from './App';


describe('<App />', () => {// add .only useful for lots of tests to only run one test
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
    cleanup();
  });
});

describe.skip('mocking', () => {// use .skip to skip a test
  it('is mocking me', () => {
    const mock = jest.fn();

    const actual = mock('smile'); // should be undefined
    expect(actual).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    cleanup();
  })
})

describe('mocking', () => {
  it('controls the mock', () => {
    const mock = jest.fn(() => 'hello')

    const actual = mock('smile');

    expect(actual).toBe('hello');
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('smile');
    cleanup();
  })
})

// Pats code
// describe('speak()', () => {
//   it('should update the message when the speak button is clicked', () => {
//     const { getByText, queryByText } = render(<App />);

//     expect(queryByText(/not mocking me/i)).toBeFalsy();// this test fail without toBeFalsy
    
//     const button = getByText(/speak/i);
//     fireEvent.click(button);

//     expect(queryByText(/not mocking me/i)).toBeTruthy();
//   })
// })

// peters code
describe('speak()', () => {
  it('should update the message when the speak button is clicked', () => {
    const { getByText, queryByText } = render(<App />)

    expect(queryByText(/not mocking me/i)).toBeFalsy();
    const button = getByText(/speak/i)
    fireEvent.click(button)

    expect(queryByText(/you are not mocking me/i)).toBeTruthy();
  })
})