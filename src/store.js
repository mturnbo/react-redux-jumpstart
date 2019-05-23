import { configureStore, saveState, loadState } from './store/configureStore';

const appStateKey = 'rrj-state';
const savedState = loadState(appStateKey);
const store = configureStore(savedState);

store.subscribe(() => {
  saveState(store.getState(), appStateKey);
});

export default store;
