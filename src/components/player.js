import gameboard from './gameboard';
import Gameboard from './gameboard';
import { output } from './tests/sampleData';

const myBoard = Gameboard(output);

export default () => {
  let gameNotOver = true;
  //I make an attack
  //click board for input
  myBoard.trackAttack(row, col, enemy.receiveAttack(row, col));
  //Checks for end of game

  !myTurn ? console.log('You Win') : console.log('You Lose');
  return { fire };
};
