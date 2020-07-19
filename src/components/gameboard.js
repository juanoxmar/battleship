import Ship, { ship } from './ship';

// (Carrier 5) (Battleship 4) (Destroyer 3) (Submarine 3) (Patrol Boat 2)
const carrier = Ship('Carrier', 5);
const battleship = Ship('Battleship', 4);
const destroyer = Ship('Destroyer', 3);
const submarine = Ship('Submarine', 3);
const patrolBoat = Ship('Patrolboat', 2);

interface gameBoard {
  board: boolean[][];
  receiveAttack: (r: number, c: number) => string;
  placement: (r: number, c: number, ship: ship, direction: number) => void;
}

export default (): gameBoard => {
  const fleet = [carrier, battleship, destroyer, submarine, patrolBoat];

  // board full of false
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  // placement of ships starting ships go either down(0) or right(1)
  const placement = (
    r: number,
    c: number,
    ship: ship,
    direction: number
  ): void => {
    for (let i = 0; i < ship.length; i++) {
      let j = 0;
      let k = 0;
      direction === 0 ? (j = i) : (k = i);
      board[r + j][c + k] = [ship.name, 0 + i];
    }
  };

  // board receives an attack
  const receiveAttack = (r: number, c: number): string => {
    if (!board[r][c]) {
      board[r][c] = false;
      return 'Miss!';
    } else {
      const shipName = board[r][c][0];
      const hitLocation = board[r][c][1];
      fleet.map((x) => (shipName === x.name ? x.hit(hitLocation) : null));
      board[r][c] = true;
      return 'Hit!';
    }
  };

  return { board, receiveAttack, placement };
};

//const alpha = 'ABCDEFGHIJ'.split('');
//const num = Array.from(Array(10), (_, i) => i + 1);

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     //board[i][j] = alpha[i] + num[j];
//   }
// }
