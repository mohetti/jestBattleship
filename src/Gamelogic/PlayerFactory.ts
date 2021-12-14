interface BoardInnerLayer {
  [key: number]: () => boolean;
}
interface Board {
  [key: number]: BoardInnerLayer;
}

type Fleet = {
  bigShip: [
    [number, number],
    [number, number],
    [number, number],
    [number, number]
  ];
  medShip: [[number, number], [number, number], [number, number]];
  smallShip: [[number, number], [number, number]];
  tinyShip: [[number, number]];
};

import Ship from './ShipFactory';
const Player = () => {
  let name: string;
  const board: Board = {};
  const isFleetSunk: boolean = false;

  const bigShip = Ship(4);
  const medShip = Ship(3);
  const smallShip = Ship(2);
  const tinyShip = Ship(1);

  function setName(playerName: string) {
    name = playerName;
    return;
  }
  function getName() {
    return name;
  }
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
  function receiveAttack() {
    return true;
  }
  function getIsFleetSunk() {
    return isFleetSunk;
  }

  return {
    setName,
    getName,
    placeShips,
    getBoard,
    receiveAttack,
    getIsFleetSunk,
  };
};

export default Player;
