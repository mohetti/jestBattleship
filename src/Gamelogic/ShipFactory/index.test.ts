import Ship from '.';

it('Calling hitShip 3 times returns false for checkIfSunk. On 4th time, the latter returns true', () => {
  let bigShip = Ship(4);
  expect(bigShip.hitShip()).toBeFalsy();
  expect(bigShip.hitShip()).toBeFalsy();
  expect(bigShip.hitShip()).toBeFalsy();
  expect(bigShip.hitShip()).toBeTruthy();
});
