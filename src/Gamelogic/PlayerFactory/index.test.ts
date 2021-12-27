import Player from '.';
import { Fleet, PlayerMethods } from '../../Types/shipTypes';

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

describe.skip('Testing the Player Factory Function', () => {
  let player1: PlayerMethods;
  beforeEach(() => {
    player1 = Player();
  });

  it('Properly sets a name for the player', () => {
    player1.setName('Helmut');
    expect(player1.getName()).toBe('Helmut');
  });
  it('Populates abstracted Gameboard with all ships', () => {
    player1.placeShips(placeShipMock);
    let getBoard = player1.getBoard();
    // bigShip
    expect(getBoard[0][0]).not.toBe(undefined);
    expect(getBoard[0][1]).not.toBe(undefined);
    expect(getBoard[0][2]).not.toBe(undefined);
    expect(getBoard[0][3]).not.toBe(undefined);
    // medShip
    expect(getBoard[1][0]).not.toBe(undefined);
    expect(getBoard[2][0]).not.toBe(undefined);
    expect(getBoard[3][0]).not.toBe(undefined);
    // smallShip
    expect(getBoard[4][4]).not.toBe(undefined);
    expect(getBoard[4][5]).not.toBe(undefined);
    // tinyShip
    expect(getBoard[9][9]).not.toBe(undefined);
    // empty fields
    expect(getBoard[6]).toBe(undefined);
    expect(getBoard[4][6]).toBe(undefined);
  });

  it('Testing receiveAttack => testing hits only. Testing fleetSunk after all .hitShip functions executed.', () => {
    player1.placeShips(placeShipMock);

    expect(player1.receiveAttack([0, 0])).toBeFalsy();
    expect(player1.receiveAttack([0, 1])).toBeFalsy();
    expect(player1.receiveAttack([0, 2])).toBeFalsy();
    expect(player1.receiveAttack([0, 3])).toBeTruthy();
    expect(player1.getIsFleetSunk()).toBeFalsy();
    expect(player1.receiveAttack([1, 0])).toBeFalsy();
    expect(player1.receiveAttack([2, 0])).toBeFalsy();
    expect(player1.receiveAttack([3, 0])).toBeTruthy();
    expect(player1.receiveAttack([4, 4])).toBeFalsy();
    expect(player1.receiveAttack([4, 5])).toBeTruthy();
    expect(player1.receiveAttack([9, 9])).toBeTruthy();
    expect(player1.getIsFleetSunk()).toBeTruthy();
  });

  it('Testing receiveAttack => Testing missed shots.', () => {
    player1.placeShips(placeShipMock);
    expect(player1.receiveAttack([0, 4])).toBe(undefined);
    expect(player1.receiveAttack([6, 6])).toBe(undefined);
  });
});