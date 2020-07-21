import Ship from '../ship';

describe('Ship', () => {
  const PatrolBoat = Ship('Patrolboat', 2);
  it('Shit Hit', () => {
    PatrolBoat.hit(0);
    expect(PatrolBoat.health).toStrictEqual([true, false]);
    expect(PatrolBoat.health.indexOf(false)).toBe(1);
  });

  it('Ship Sunk', () => {
    PatrolBoat.hit(1);
    expect(PatrolBoat.health).toStrictEqual([true, true]);
    expect(PatrolBoat.health.indexOf(false)).toBe(-1);
  });
});
