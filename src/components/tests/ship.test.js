import Ship from '../ship';

describe('Ship', () => {
  const PatrolBoat = Ship('Patrol Boat', 2);

  it('Shit Hit', () => {
    PatrolBoat.hit(0);
    expect(PatrolBoat.health).toStrictEqual([true, false]);
  });

  it('Ship Sunk', () => {
    PatrolBoat.hit(1);
    expect(PatrolBoat.health).toStrictEqual([true, true]);
    expect(PatrolBoat.health.indexOf(false)).toBe(-1);
  });
});
