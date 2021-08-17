import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterAll(() => cleanup());
  it('renders App and tests color changes', () => {
    const page = render(<App />);

    const newColor = '#abe1b9';
    // get color input
    const input = page.getByTestId('color');
    expect(input.value).toBe('#ff0000');
    // fire change event on color input with newColor
    fireEvent.change(input, { target: { value: newColor } });
    // expect display to have backgroundColor === new Color
    expect(input.value).toBe('#abe1b9');

    // get undo button
    const undo = page.getByText('undo');
    // fire click event on undo button
    fireEvent.click(undo);
    // expect display to have backgroundColor === red
    expect(input.value).toBe('#ff0000');

    // get redo button
    const redo = screen.getByText('redo');
    // fire click event on redo button
    fireEvent.click(redo);
    // expect display to have backgroundColor === newColor
    expect(input.value).toBe('#abe1b9');
  });
});
