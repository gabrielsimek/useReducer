export const undo = () => ({ type: UNDO });
export const UNDO = 'UNDO';

export const REDO = 'REDO';
export const redo = () => ({ type: REDO });

export const RECORD = 'RECORD';
export const record = (color) => ({
  type: RECORD,
  payload: color
});

export const reducer = (state, action) => {
  switch(action.type) {
    case RECORD:
      return { 
        ...state, 
        before: [...state.before, state.current], 
        current: action.payload,
      };
    case UNDO: 
      return {
        ...state,
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1)
      };
    case REDO: 
      return {
        ...state,
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1)
      };
    default:
      return state;
  }
};
