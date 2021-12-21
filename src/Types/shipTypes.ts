interface BoardInnerLayer {
  [key: number]: () => boolean;
}
export interface Board {
  [key: number]: BoardInnerLayer;
}

export type Fleet = {
  bigShip: number[][];
  medShip: number[][];
  smallShip: number[][];
  tinyShip: number[][];
};

export type ShipMethods = {
  hitShip: () => void;
};

export type PlayerMethods = {
  setName: (input: string) => void;
  getName: () => string;
  placeShips: (fleet: Fleet) => void;
  getBoard: () => Board;
  receiveAttack: (coord: [number, number]) => boolean | undefined;
  getIsFleetSunk: () => boolean;
};

export enum ShipEnum {
  tinyShip = 1,
  smallShip,
  medShip,
  bigShip,
}
