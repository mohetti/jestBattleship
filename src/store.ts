import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const print1 = (storeAPI: any) => (next: any) => (action: any) => {
  return next(action);
};

const composedEnhancer = composeWithDevTools(applyMiddleware(print1));

export const store = createStore(rootReducer, undefined, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
