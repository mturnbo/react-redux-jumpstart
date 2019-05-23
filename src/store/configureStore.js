import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const saveState = (state, key) => {
  try {
    const serialisedState = JSON.stringify(state);
    window.sessionStorage.setItem(key, serialisedState);
  } catch (err) {
    console.error(err);
  }
};

export const loadState = key => {
  try {
    const serialisedState = window.sessionStorage.getItem(key);
    return (serialisedState) ? JSON.parse(serialisedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

export function configureStore(savedState) {
  return createStore(
    RootReducer,
    savedState,
    composeEnhancer(applyMiddleware(thunk)),
  );
}
