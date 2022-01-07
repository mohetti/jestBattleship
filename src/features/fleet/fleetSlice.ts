type T = {
  type: string;
  payload: {
    [key: string]: number[][];
  };
};

const prevState = {
  bigShip: [],
  medShip: [],
  smallShip: [],
  tinyShip: [],
};

export default function fleetSlice(state = prevState, action: T) {
  switch (action.type) {
    case 'fleet/set': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
