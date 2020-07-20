export default (ship, shipLength) => {
  const name = ship;
  const length = shipLength;
  const health = Array(length).fill(false);

  let sunk = false;
  const isSunk = () => {
    if (health.indexOf(false) === -1) {
      sunk = true;
      return `You sunk my ${name}!`;
    }
  };

  const hit = (t) => {
    health[t] = true;
    isSunk();
    return true;
  };

  return { name, length, health, hit, sunk };
};
