import { boardKey } from './board';
import Gameboard from './gameboard';
import { output } from './tests/sampleData';

const me = Gameboard(output);
const computer = Gameboard(output);

const compKey = [];
const alpha = 'ABCDEFGHIJ'.split('');
const num = Array.from(Array(10), (_, i) => i + 1);
const keys = (r, c) => alpha[r] + num[c];
for (let j = 0; j < 10; j++) {
  const column = [];
  for (let i = 0; i < 10; i++) {
    column.push(keys(i, j));
  }
  compKey.push(column);
}

setTimeout(function () {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      if (me.board[i][j] !== null) {
        const id = document.getElementById('m' + compKey[i][j]);
        id.innerHTML = '&#128674;';
      }
    }
  }
}, 1);

const Player = () => {
  const computerPlay = () => {
    let idr;
    let idc;
    do {
      idr = Math.floor(Math.random() * Math.floor(10));
      idc = Math.floor(Math.random() * Math.floor(10));
    } while (computer.enemyBoard[idr][idc] !== null);
    computer.trackAttack(idr, idc, me.receiveAttack(idr, idc));
    const mSq = document.getElementById('m' + compKey[idr][idc]);
    const span = document.getElementById('mfire');

    if (computer.enemyBoard[idr][idc]) {
      span.innerHTML = `${compKey[idr][idc]} is a hit!`;
    } else {
      span.innerHTML = `${compKey[idr][idc]} is a miss!`;
    }
    computer.enemyBoard[idr][idc]
      ? (mSq.innerHTML = '&#128293;')
      : (mSq.innerHTML = '&#127754;');

    if (me.fleetDown()) {
      mSq.innerHTML = '&#128293;';
      const btn = document.getElementsByClassName('eSquare');
      Array.from(btn).map((x) => x.setAttribute('disabled', null));
      span.innerHTML = `Computer wins!`;
      return;
    }
  };
  return { computerPlay };
};

const comp = Player();

export const eventFire = (e) => {
  const span = document.getElementById('fire');
  e.target.disabled = true;
  const r = boardKey[e.target.innerHTML][0];
  const c = boardKey[e.target.innerHTML][1];
  me.trackAttack(r, c, computer.receiveAttack(r, c));

  if (me.enemyBoard[r][c]) {
    span.innerHTML = `${e.target.innerHTML} is a hit!`;
  } else {
    span.innerHTML = `${e.target.innerHTML} is a miss!`;
  }
  me.enemyBoard[r][c]
    ? (e.target.innerHTML = '&#128293;')
    : (e.target.innerHTML = '&#127754;');

  if (computer.fleetDown()) {
    e.target.innerHTML = '&#128293;';
    const btn = document.getElementsByClassName('eSquare');
    Array.from(btn).map((x) => x.setAttribute('disabled', null));
    span.innerHTML = `You win!`;
    return;
  }

  comp.computerPlay();
};
