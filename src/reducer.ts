import { combineReducers } from 'redux';
import nameSlice from './features/name/nameSlice';
import fleetSlice from './features/fleet/fleetSlice';

export const rootReducer = combineReducers({
  name: nameSlice,
  fleet: fleetSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
