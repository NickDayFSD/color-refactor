export const FRESH = 'FRESH';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

export const fresh = (current) => ({
  type: FRESH,
  payload: current,
});

export const undo = () => ({
  type: UNDO
});

export const redo = () => ({
  type: REDO
});
