import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { initialState } from '../../state/reducer';
import App from './App';

describe('App component', () => {
  
  it('renders App', () => {
    render(<App initialState={initialState}/>);

    //initial display or red
    const display = screen.getByTestId('display');
    expect(display).toHaveStyle({ backgroundColor: '#FF0000' });
    
    //change display to blue
    const colorInput = screen.getByTestId('color-input');
    fireEvent.change(colorInput, { target: { value: '#0000FF' } });
    expect(display).toHaveStyle({ backgroundColor: '#0000FF' });
    
    //undo change back to red
    const undoButton = screen.getByText('undo');
    fireEvent.click(undoButton);
    expect(display).toHaveStyle({ backgroundColor: '#FF0000' });

    //redo change back to blue
    const redoButton = screen.getByText('redo');
    fireEvent.click(redoButton);
    expect(display).toHaveStyle({ backgroundColor: '#0000FF' });

  });
});
