Take this code:

const useRecord = (init) => {
  const [before, setBefore] = useState([]);
  const [current, setCurrent] = useState(init);
  const [after, setAfter] = useState([]);

  const undo = () => {
      current 'green'
      before ['red', 'yellowish']
      current = 'before[before.length - 1]' = yellow
      after ['green']
    before =  ['red'] 

    setAfter((after) => [current, ...after]);
    setCurrent(before[before.length - 1]);
    setBefore((before) => before.slice(0, -1));
  };

  const redo = () => {
      before = ['red']
      current = 'yellow'
      after = ['green']
      before => ['red', 'yellow']
      current => ['green'][0] => 'green'
      after => ['green', 1].slice(1) => []
      
    setBefore((before) => [...before, current]);
    setCurrent(after[0]);
    setAfter((after) => after.slice(1));
  };

  const record = (val) => {
    before []
    current: 'red'

    ['red', 'yellow']

    setBefore((before) => [...before, current]);
    setCurrent(val);
  };

  return {
    undo,
    record,
    redo,
    current,
  };
};

function App() {
  const { current, undo, redo, record } = useRecord("#FF0000");

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div
        style={{ backgroundColor: current, width: "10rem", height: "10rem" }}
      ></div>
    </>
  );
}

export default App;

export default App;
Test
Write a test that tests the behavior off App.

Refactor
Refactor the hook to useReducer instead of useState. Refactor only the hook, you shouldn't need to refactor the component at all.

Rubric
behavior test 3 pts
refactor 7 pts
// get color input
// fire change event on color input with newColor
// expect display to have backgroundColor === newColor

// get undo button
// fire click event on undo button
// expect display to have backgroundColor === red

// get redo button
// fire click event on redo button
// expect display to have backgroundColor === newColor