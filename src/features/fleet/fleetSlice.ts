import { Fleet } from '../../Types/shipTypes';

type T = {
  type: string;
  payload: Fleet;
};

export default function fleetSlice(state = {}, action: T) {
  switch (action.type) {
    case 'fleet/set': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
