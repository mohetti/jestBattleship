import { randomFleet } from '../../Gamelogic/helpers';
import Player from '../../Gamelogic/PlayerFactory';
import { Fleet } from '../../Types/shipTypes';

function initialState() {
  let player = Player();
  let computer = Player();
  computer.placeShips(randomFleet());
  return {
    player,
    computer,
  };
}

type T = {
  type: string;
  payload: Fleet;
  atkCoords: [number, number];
};

export default function playerObjectSlice(state = initialState(), action: T) {
  switch (action.type) {
    case 'player/placeShips': {
      console.log(action.payload);

      const prevState = { ...state };
      prevState.player.placeShips(action.payload);
      return { ...prevState };
    }
    case 'player/receiveAttack': {
      const prevState = { ...state };
      prevState.player.receiveAttack(action.atkCoords);
    }
    default:
      return state;
  }
}
