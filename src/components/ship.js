export interface ship {
  name: string;
  length: number;
  health: boolean[];
  hit: (t: number) => boolean;
}

export default (ship: string, shipLength: number): ship => {
  const name = ship;
  const length = shipLength;
  const health = Array(length).fill(false);

  const isSunk = () => {
    if (health.indexOf(false) === -1) {
      return `You sunk my ${name}!`;
    }
  };

  const hit = (t: number) => {
    health[t] = true;
    isSunk();
    return true;
  };

  return { name, length, health, hit };
};
