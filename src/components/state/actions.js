export const FRESH = 'FRESH';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const freshColor = (current) => ({
  type: FRESH,
  payload: current,
});

export const undoColor = () => {
  console.log('this is in actions > undo');
  return ({
    type: UNDO
  });};

export const redoColor = () => {
  console.log('this is in actions > redo');
  return ({
    type: REDO
  });};
