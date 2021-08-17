import React from 'react';
import { useDispatch, useSelector } from '../state/ReduxProvider';
import { freshColor, undoColor, redoColor } from '../state/actions';
import { selectColor } from '../state/selectors';

function App() {
  const current = useSelector(selectColor);
  const dispatch = useDispatch();
  const undo = () => dispatch(undoColor());
  const redo = () => dispatch(redoColor());

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input
        data-testid="color"
        type="color"
        value={current}
        onChange={({ target }) => dispatch(freshColor(target.value))}
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
