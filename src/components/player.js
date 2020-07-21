import React from 'react';

export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enemyBoard: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
    };
  }

  computerPlay = (attack) => {
    const enemyBoard = this.state.enemyBoard;
    let r, c;
    do {
      r = Math.floor(Math.random() * Math.floor(10));
      c = Math.floor(Math.random() * Math.floor(10));
    } while (enemyBoard[r][c] !== null);
    enemyBoard[r][c] = attack.receiveAttack(r, c);
    this.setState({ enemyBoard: enemyBoard });
  };
}
