import Ship from '.';
import { ShipMethods } from '../../Types/shipTypes';

describe.skip('Testing ShipFactory methods', () => {
  let bigShip: ShipMethods;
  beforeEach(() => {
    bigShip = Ship(4);
  });

  it('Calling hitShip 3 times returns false for checkIfSunk. On 4th time, the latter returns true', () => {
    expect(bigShip.hitShip()).toBeFalsy();
    expect(bigShip.hitShip()).toBeFalsy();
    expect(bigShip.hitShip()).toBeFalsy();
    expect(bigShip.hitShip()).toBeTruthy();
  });
});
