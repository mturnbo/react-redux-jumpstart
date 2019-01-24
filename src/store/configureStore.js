import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
	return createStore(
		RootReducer,
		composeEnhancer(applyMiddleware(thunk))
	);
}
