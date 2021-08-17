import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from '../../state/reducer';
import { record, undo, redo } from '../../actions/actions.js';

function App({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <button onClick={() => dispatch(undo())}>undo</button>
      <button onClick={() => dispatch(redo())}>redo</button>
      <input
        data-testid="color-input"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch(record(target.value))}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;

App.propTypes = {
  initialState: PropTypes.object.isRequired
};
