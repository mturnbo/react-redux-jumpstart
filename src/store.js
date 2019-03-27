import { createStore } from 'redux';
import RootReducer from './reducers';

export default (initialState) => createStore(RootReducer, initialState);
