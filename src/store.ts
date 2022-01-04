import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const print1 = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

const composedEnhancer = composeWithDevTools(applyMiddleware(print1));

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
