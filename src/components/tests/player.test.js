import Player from '../player';
import { output } from './sampleData';

describe('Player Test', () => {
  const computer = Player(output);
  computer.board.receiveAttack(0, 0);

  it('My turn', () => {
    expect().toStrictEqual(true);
  });
});
