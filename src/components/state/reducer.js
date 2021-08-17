// import functions
import { UNDO, REDO, NEW } from './actions';

// initialize state
export const initialState = {
  before: [],
  current: '#FF0000',
  after: []
};

export function reducer(state, action) {
  const { before, current, after } = state;

  switch(action.type) {
    case NEW:
      console.log('new');
      return {
        ...state,
        before: [before, current],
        current: action.payload
      };
    case UNDO:
      console.log('undo');
      return {
        ...state,
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1)
      };

    case REDO:
      console.log('redo');
      return {
        ...state,
        before: [...before, current],
        current: after[0],
        after: after.slice(1)
      };
    
    default:
      console.log('idk how you got here');
      return {
        ...state
      };
  }
}
