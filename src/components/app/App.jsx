import React from 'react';
import { undoAction, redoAction, recordAction } from '../../state/actions.js';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { selectCurrent } from '../../state/selectors';

function App() {
  const dispatch = useDispatch();
  const current = useSelector(selectCurrent);

  const undo = () => {
    dispatch(undoAction());
  };
  const redo = () => {
    dispatch(redoAction());
  };
  const record = (value) => {
    dispatch(recordAction(value));
  };

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        data-testid="color-input"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        data-testid="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;

