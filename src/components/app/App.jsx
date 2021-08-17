import React, { useReducer, useState } from 'react';
import { reducer, record, undo, redo } from '../../state/reducer';



// const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

// const undo = () => {
//   setAfter((after) => [current, ...after]); //
//   setCurrent(before[before.length - 1]); //
//   setBefore((before) => before.slice(0, -1));//
// };

// const redo = () => {
//   setBefore((before) => [...before, current]);//
//   setCurrent(after[0]);//
//   setAfter((after) => after.slice(1));
// };

// const record = (val) => {
//   setBefore((before) => [...before, current]);
//   setCurrent(val);
// };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };

function App() {
  //
  const initialState = {
    before: [],
    current: '#FF0000',
    after: []
  };

  // const UNDO = 'UNDO';
  // const undo = () =>( { type: UNDO } )

  // const REDO = 'REDO';
  // const redo = () => ( {type: REDO} )

  // const RECORD = 'RECORD';
  // const record = (color) => ({
  //   type: RECORD,
  //   payload: color
  // })


  const [state, dispatch] = useReducer(reducer, initialState);
 
  
  // const { current, undo, redo, record } = useRecord('#FF0000');


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
