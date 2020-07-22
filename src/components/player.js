import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { initialValues, validationSchema } from './validation';
import './form.css';
import Gameboard from './gameboard';
import { output } from './computerShips';
import FormGroup from './fields';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      enemyBoard: Array(10)
        .fill(null)
        .map(() => Array(10).fill(null)),
      compCheck: false,
    };
  }

  computerPlay = () => {
    const enemyBoard = this.state.enemyBoard;
    let r, c;
    do {
      r = Math.floor(Math.random() * Math.floor(10));
      c = Math.floor(Math.random() * Math.floor(10));
    } while (enemyBoard[r][c] !== null);
    enemyBoard[r][c] = this.board.receiveAttack(r, c);
    this.setState({ enemyBoard: enemyBoard });
    if (this.board.fleetDown()) this.setState({ compCheck: true });
  };

  winCheck = () => {
    if (this.eBoard.fleetDown()) this.setState({ compCheck: true });
  };

  onClickHandle = () => {
    this.computerPlay();
    this.winCheck();
  };

  resetClick = () => this.setState({ isSubmitted: false, compCheck: false });

  render() {
    const fleet = [
      'Carrier',
      'Battleship',
      'Destroyer',
      'Submarine',
      'Patrolboat',
    ];

    return (
      <React.Fragment>
        <h1>Battleship</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            console.log(output);
            this.setState({ isSubmitted: true });
            setSubmitting(false);
          }}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ dirty, isValid, isSubmitting, values }) => (
            <>
              {!this.state.isSubmitted && (
                <Form className='forms'>
                  <p>Place your ships</p>
                  {fleet.map((x) => (
                    <FormGroup name={x} key={x} />
                  ))}
                  <br />
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting || !dirty || !isValid}
                  >
                    Submit
                  </Button>
                </Form>
              )}
              <div className='reset'>
                {this.state.isSubmitted && (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={this.resetClick}
                  >
                    RESET GAME
                  </Button>
                )}
              </div>
              <br />
              {this.state.isSubmitted && (
                <div className='boards'>
                  <Gameboard
                    who='My Board'
                    input={values}
                    computer={1}
                    dis={true}
                    btnC='mySquare'
                    ref={(x) => (this.board = x)}
                  />
                  <Gameboard
                    who='Enemy Board'
                    input={output}
                    dis={this.state.compCheck}
                    btnC='eSquare'
                    onClick={this.onClickHandle}
                    ref={(x) => (this.eBoard = x)}
                  />
                </div>
              )}
            </>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}
