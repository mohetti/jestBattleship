import { combineReducers } from 'redux';
import nameSlice from './features/name/nameSlice';
import fleetSlice from './features/fleet/fleetSlice';
import playerObjectSlice from './features/playerObjects/playerObjectSlice';

export const rootReducer = combineReducers({
  name: nameSlice,
  fleet: fleetSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
