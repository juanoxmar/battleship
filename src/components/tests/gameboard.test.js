import Gameboard from '../gameboard';
import { output } from './sampleData';

describe('Gameboard Testing', () => {
  const game = Gameboard(output);

  it('Unsuccesfful attack returns', () => {
    expect(game.receiveAttack(0, 7)).toBe(false);
  });

  it('Sucessful attack returns', () => {
    expect(game.receiveAttack(3, 0)).toBe(true);
  });

  it('Checking if all ships have been sunk', () => {
    for (let i = 0; i <= 5; i++) {
      for (let j = 0; j <= 5 - i; j++) {
        game.receiveAttack(i, j);
      }
    }
    expect(game.fleetDown).toBe(false);
  });
});
