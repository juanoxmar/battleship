import Ship from './ship';

export default (data) => {
  const fleet = {
    Carrier: Ship('Carrier', 5),
    Battleship: Ship('Battleship', 4),
    Destroyer: Ship('Destroyer', 3),
    Submarine: Ship('Submarine', 3),
    Patrolboat: Ship('Patrolboat', 2),
  };

  // board full of null
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  const enemyBoard = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  // placement of ships starting ships go either right(0) or down(1)
  const placement = (r, c, ship, direction) => {
    for (let i = 0; i < ship.length; i++) {
      let j = 0,
        k = 0;
      direction === 1 ? (j = i) : (k = i);
      board[r + j][c + k] = [ship.name, 0 + i];
    }
  };

  placement(data.Carrierrow, data.Carriercol, fleet.Carrier, data.Carrierdir);
  placement(
    data.Battleshiprow,
    data.Battleshipcol,
    fleet.Battleship,
    data.Battleshipdir
  );
  placement(
    data.Destroyerrow,
    data.Destroyercol,
    fleet.Destroyer,
    data.Destoryerdir
  );
  placement(
    data.Submarinerow,
    data.Submarinecol,
    fleet.Submarine,
    data.Submarinedir
  );
  placement(
    data.Patrolboatrow,
    data.Patrolboatcol,
    fleet.Patrolboat,
    data.Patrolboatdir
  );

  const trackAttack = (r, c, response) => {
    enemyBoard[r][c] = response;
  };

  let fleetDown = false;

  // board receives an attack
  const receiveAttack = (r, c) => {
    if (board[r][c] === null) {
      return false;
    } else {
      fleet[board[r][c][0]].hit(board[r][c][1]);
      if (fleetSunkCheck()) {
        //Something to trigger & display the game is over
        fleetDown = true;
        return 'Game Over!';
      } else {
        //Something to display a hit
        return true;
      }
    }
  };
  const fleetSunkCheck = () =>
    fleet.Carrier.sunk &&
    fleet.Battleship.sunk &&
    fleet.Destroyer.sunk &&
    fleet.Submarine.sunk &&
    fleet.Patrolboat.sunk === -1
      ? true
      : false;

  return { receiveAttack, fleetDown, trackAttack };
};
