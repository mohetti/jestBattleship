import { randomFleet, hasNoJump } from '.';

function setup() {
  let fleet = randomFleet();
  return fleet;
}

it.skip('expect ships-arrays to have specific length and fleet itself to have specific keys', () => {
  const fleet = setup();
  expect(fleet.bigShip).toHaveLength(4);
  expect(fleet.medShip).toHaveLength(3);
  expect(fleet.smallShip).toHaveLength(2);
  expect(fleet.tinyShip).toHaveLength(1);

  let fleetKeys = Object.keys(fleet);
  expect(fleetKeys).toHaveLength(4);
  expect(fleetKeys).toEqual(
    expect.arrayContaining(['bigShip', 'medShip', 'smallShip', 'tinyShip'])
  );
});
it.skip('hasNoJump tests, if the possible coords of a ship arent obstructed by another ship. If this would be the case, it returns false', () => {
  expect(
    hasNoJump(
      [
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      true
    )
  ).toBeTruthy();
  expect(
    hasNoJump(
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      false
    )
  ).toBeTruthy();
  expect(
    hasNoJump(
      [
        [0, 1],
        [0, 1],
        [0, 3],
      ],
      true
    )
  ).toBeFalsy();
  expect(
    hasNoJump(
      [
        [0, 1],
        [1, 1],
        [1, 1],
      ],
      false
    )
  ).toBeFalsy();
});
