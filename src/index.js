import React from 'react';
import { render } from 'react-dom';
import { ReduxProvider } from './components/state/ReduxProvider';
import { initialState, reducer } from './components/state/reducer';
import App from './components/app/App';

render(
  <ReduxProvider reducer={reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
