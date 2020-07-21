import React from 'react';
import Ship from './ship';
import { bk, keys } from './validation';
import { output } from './tests/sampleData';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fleet: {
        Carrier: Ship('Carrier', 5),
        Battleship: Ship('Battleship', 4),
        Destroyer: Ship('Destroyer', 3),
        Submarine: Ship('Submarine', 3),
        Patrolboat: Ship('Patrolboat', 2),
      },
      board: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
      hitText: '',
      sunkText: '',
      computer: 0,
      dis: false,
    };
  }

  shipInput = (data) => {
    const board = this.state.board;
    const ship = this.state.fleet;
    const placement = (r, c, direction, ship) => {
      for (let i = 0; i < ship.length; i++) {
        let j = 0,
          k = 0;
        direction === 1 ? (j = i) : (k = i);
        board[r + j][c + k] = [ship.name, 0 + i];
      }
    };
    placement(data.Carrierrow, data.Carriercol, data.Carrierdir, ship.Carrier);
    placement(
      data.Battleshiprow,
      data.Battleshipcol,
      data.Battleshipdir,
      ship.Battleship
    );
    placement(
      data.Destroyerrow,
      data.Destroyercol,
      data.Destoryerdir,
      ship.Destroyer
    );
    placement(
      data.Submarinerow,
      data.Submarinecol,
      data.Submarinedir,
      ship.Submarine
    );
    placement(
      data.Patrolboatrow,
      data.Patrolboatcol,
      data.Patrolboatdir,
      ship.Patrolboat
    );
    this.setState({
      board: board,
    });
  };

  fleetDown = () => {
    const fleet = this.state.fleet;
    return fleet.Carrier.isSunk() &&
      fleet.Battleship.isSunk() &&
      fleet.Destroyer.isSunk() &&
      fleet.Submarine.isSunk() &&
      fleet.Patrolboat.isSunk()
      ? true
      : false;
  };

  handleClick = (e) => {
    e.target.disabled = true;
    const compKey = bk;
    const [r, c] = compKey[e.target.innerHTML];
    this.receiveAttack(r, c);
  };

  receiveAttack = (r, c) => {
    const board = this.state.board;
    const fleet = this.state.fleet;
    if (board[r][c] === null) {
      board[r][c] = false;
      this.setState({ myBoard: board, hitText: 'Miss!' });
      return false;
    } else {
      fleet[board[r][c][0]].hit(board[r][c][1]);
      if (fleet[board[r][c][0]].isSunk()) {
        if (this.fleetDown()) {
          const text = `You sunk my fleet! You Win!`;
          board[r][c] = true;
          this.setState({
            myBoard: board,
            hitText: 'Hit!',
            sunkText: text,
            dis: true,
          });
        } else {
          const text = `You sunk my ${fleet[board[r][c][0]].name}!`;
          board[r][c] = true;
          this.setState({
            myBoard: board,
            hitText: 'Hit!',
            sunkText: text,
          });
        }
      } else {
        board[r][c] = true;
        this.setState({ myBoard: board, hitText: 'Hit!', sunkText: '' });
      }
      return true;
    }
  };

  buttonText = (j, i) => {
    const key = keys;
    const board = this.state.board;
    if (board[j][i] === null) return key(j, i);
    else if (Array.isArray(board[j][i]) && this.state.computer === 1)
      return '\u{1F6A2}';
    else if (Array.isArray(board[j][i])) return key(j, i);
    else if (board[j][i]) return '\u{1F525}';
    else if (!board[j][i]) return '\u{1F30A}';
  };

  componentDidMount() {
    this.shipInput(output);
    this.setState({ computer: this.props.computer, dis: this.props.dis });
  }

  render() {
    const key = keys;
    const column = [];
    for (let j = 0; j < 10; j++) {
      const row = [];
      for (let i = 0; i < 10; i++) {
        row.push(
          <button
            className={this.props.btnC}
            disabled={this.state.dis}
            onClick={this.handleClick}
            id={this.props.ids + key(j, i)}
            key={key(j, i)}
          >
            {this.buttonText(j, i)}
          </button>
        );
      }
      column.push(
        <div className='row' key={j}>
          {row}
        </div>
      );
    }
    return (
      <div className='enemyBoard' computer={this.state.computer}>
        {column}
        <span>{this.props.who}</span>
        <span>{this.state.hitText}</span>
        <span>{this.state.sunkText}</span>
      </div>
    );
  }
}
