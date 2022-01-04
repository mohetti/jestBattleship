import { combineReducers } from 'redux';
import nameSlice from './features/name/nameSlice';

export const rootReducer = combineReducers({
  name: nameSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
