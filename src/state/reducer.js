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
        current: action.payload,
        before: [...state.before, action.payload] 
      };
    default:
      return state;
  }
};
