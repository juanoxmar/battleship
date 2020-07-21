export default (name, length) => {
  const health = Array(length).fill(false);
  const hit = (t) => {
    health[t] = true;
  };
  const isSunk = () => (health.indexOf(false) === -1 ? true : false);
  return { name, length, health, hit, isSunk };
};
