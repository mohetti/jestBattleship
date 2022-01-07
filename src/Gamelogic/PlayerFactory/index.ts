import { Board, Fleet } from '../../Types/shipTypes';
import Ship from '../ShipFactory';

const Player = () => {
  // let name: string;
  const board: Board = {};
  let fleetNumber = 4;

  const bigShip = Ship(4);
  const medShip = Ship(3);
  const smallShip = Ship(2);
  const tinyShip = Ship(1);

  function placeShips(fleet: Fleet) {
    fleet.bigShip.forEach((x) => {
      board[x[0]] = { ...board[x[0]], [x[1]]: bigShip.hitShip };
    });
    fleet.medShip.forEach((x) => {
      board[x[0]] = { ...board[x[0]], [x[1]]: medShip.hitShip };
    });
    fleet.smallShip.forEach((x) => {
      board[x[0]] = { ...board[x[0]], [x[1]]: smallShip.hitShip };
    });
    fleet.tinyShip.forEach((x) => {
      board[x[0]] = { ...board[x[0]], [x[1]]: tinyShip.hitShip };
    });
    return;
  }
  function getBoard() {
    return board;
  }
  function receiveAttack(tuple: [number, number]) {
    let isShipSunk = undefined;
    if (board[tuple[0]] && board[tuple[0]][tuple[1]]) {
      isShipSunk = board[tuple[0]][tuple[1]]();
    }
    isShipSunk && fleetNumber--;
    return isShipSunk;
  }
  function getIsFleetSunk() {
    return fleetNumber === 0;
  }

  return {
    //setName,
    //getName,
    placeShips,
    getBoard,
    receiveAttack,
    getIsFleetSunk,
  };
};

export default Player;
