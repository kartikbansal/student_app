import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import rootReducer from './reducers/index.js';
import { saveState, loadState } from './utils/localStorage.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const initialState = loadState();
const store = configureStore(rootReducer, initialState);
store.subscribe(() => saveState(store.getState()));

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);