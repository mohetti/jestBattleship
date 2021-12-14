import Ship from '../../Gamelogic/ShipFactory';

type Props = {
  hitShip: () => void;
  checkIfSunk: () => boolean;
};

describe('Testing ShipFactory methods', () => {
  let bigShip: Props;
  beforeEach(() => {
    bigShip = Ship(4);
  });

  it('Calling hitShip 3 times returns false for checkIfSunk. On 4th time, the latter returns true', () => {
    bigShip.hitShip();
    expect(bigShip.checkIfSunk()).toBeFalsy();
    bigShip.hitShip();
    expect(bigShip.checkIfSunk()).toBeFalsy();
    bigShip.hitShip();
    expect(bigShip.checkIfSunk()).toBeFalsy();
    bigShip.hitShip();
    expect(bigShip.checkIfSunk()).toBeTruthy();
  });
});