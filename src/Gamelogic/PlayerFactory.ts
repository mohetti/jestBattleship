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

const Player = () => {
  let name: string;
  const board: Board = {};
  const isFleetSunk: boolean = false;

  function setName(playerName: string) {
    name = playerName;
    return;
  }
  function getName() {
    return name;
  }
  function placeShips(fleet: Fleet) {
    return;
  }
  function getBoard() {
    return {
      0: {
        0: function () {
          return true;
        },
      },
    };
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
