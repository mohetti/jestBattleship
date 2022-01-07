import Player from '.';
import { Fleet } from '../../Types/shipTypes';

const placeShipMock: Fleet = {
  bigShip: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  medShip: [
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  smallShip: [
    [4, 4],
    [4, 5],
  ],
  tinyShip: [[9, 9]],
};

function setup() {
  const player1 = Player();
  return player1;
}

it('Populates abstracted Gameboard with all ships', () => {
  const { placeShips, getBoard } = setup();
  placeShips(placeShipMock);
  let boardState = getBoard();
  // bigShip
  expect(boardState[0][0]).not.toBe(undefined);
  expect(boardState[0][1]).not.toBe(undefined);
  expect(boardState[0][2]).not.toBe(undefined);
  expect(boardState[0][3]).not.toBe(undefined);
  // medShip
  expect(boardState[1][0]).not.toBe(undefined);
  expect(boardState[2][0]).not.toBe(undefined);
  expect(boardState[3][0]).not.toBe(undefined);
  // smallShip
  expect(boardState[4][4]).not.toBe(undefined);
  expect(boardState[4][5]).not.toBe(undefined);
  // tinyShip
  expect(boardState[9][9]).not.toBe(undefined);
  // empty fields
  expect(boardState[6]).toBe(undefined);
  expect(boardState[4][6]).toBe(undefined);
});

it('Testing receiveAttack => testing hits only. Testing fleetSunk after all .hitShip functions executed.', () => {
  const { placeShips, receiveAttack, getIsFleetSunk } = setup();
  placeShips(placeShipMock);

  expect(receiveAttack([0, 0])).toBeFalsy();
  expect(receiveAttack([0, 1])).toBeFalsy();
  expect(receiveAttack([0, 2])).toBeFalsy();
  expect(receiveAttack([0, 3])).toBeTruthy();
  expect(getIsFleetSunk()).toBeFalsy();
  expect(receiveAttack([1, 0])).toBeFalsy();
  expect(receiveAttack([2, 0])).toBeFalsy();
  expect(receiveAttack([3, 0])).toBeTruthy();
  expect(receiveAttack([4, 4])).toBeFalsy();
  expect(receiveAttack([4, 5])).toBeTruthy();
  expect(receiveAttack([9, 9])).toBeTruthy();
  expect(getIsFleetSunk()).toBeTruthy();
});

it('Testing receiveAttack => Testing missed shots.', () => {
  const { placeShips, receiveAttack } = setup();
  placeShips(placeShipMock);
  expect(receiveAttack([0, 4])).toBe(undefined);
  expect(receiveAttack([6, 6])).toBe(undefined);
});
