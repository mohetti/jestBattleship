type T = {
  type: string;
  payload: string;
};

export default function nameReducer(state = 'Placeholder', action: T) {
  switch (action.type) {
    case 'name/change': {
      return action.payload;
    }
    default:
      return state;
  }
}
