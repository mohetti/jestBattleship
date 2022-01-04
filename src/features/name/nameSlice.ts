type T = {
  type: string;
  payload: any;
};

export default function nameReducer(
  state = { name: '', smth: 'Smth' },
  action: T
) {
  switch (action.type) {
    case 'name/change': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'name/smth': {
      return {
        ...state,
        smth: action.payload,
      };
    }
    default:
      return state;
  }
}
