export default (ship, shipLength) => {
  const name = ship;
  const length = shipLength;
  const health = Array(length).fill(false);
  const hit = (t) => {
    health[t] = true;
    return true;
  };

  const isSunk = () => (health.indexOf(false) === -1 ? true : false);

  return { name, length, health, hit, isSunk };
};
