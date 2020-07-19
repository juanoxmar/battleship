import Gameboard from './gameboard';
import Ship from './ship';

// (Carrier 5) (Battleship 4) (Destroyer 3) (Submarine 3) (Patrol Boat 2)

describe('Gameboard Testing', () => {
  const game = Gameboard();
  // const carrier = Ship('Carrier', 5);
  game.placement(0, 0, Ship('Carrier', 5), 0);

  it('The Board', () => {
    expect(game.board[0][1]).toBe(null);
  });

  it('The Board', () => {
    expect(game.board[9][9]).toBe(null);
  });

  it('Place Ships on Board', () => {
    expect(game.board[0][0]).toStrictEqual(['Carrier', 0]);
  });

  it('Place Ships on Board', () => {
    expect(game.board[4][0]).toStrictEqual(['Carrier', 4]);
  });

  it('The Board', () => {
    expect(game.receiveAttack(0, 1)).toBe('Miss!');
  });

  it('The Board', () => {
    expect(game.receiveAttack(0, 0)).toBe('Hit!');
  });
});
