import { randomFleet } from '../../Gamelogic/helpers';

type Fleet = {
  bigShip: number[][];
  medShip: number[][];
  smallShip: number[][];
  tinyShip: number[][];
};

describe('Testing random placement of ships', () => {
  let fleet: Fleet;
  beforeEach(() => {
    fleet = randomFleet();
  });
  it('expect ships-arrays to have specific length and fleet itself to have specific keys', () => {
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
});
