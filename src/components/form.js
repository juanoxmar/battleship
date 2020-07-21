import * as React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import FormGroup from './fieldComponents';
import { initialValues, validationSchema } from './validation';
import './form.css';
import _ from 'lodash';

export default () => {
  const fleet = [
    'Carrier',
    'Battleship',
    'Destroyer',
    'Submarine',
    'Patrolboat',
  ];

  const handleSubmit = (values) => {
    const {
      Carrierrow,
      Carriercol,
      Carrierdir,
      Battleshiprow,
      Battleshipcol,
      Battleshipdir,
      Destroyerrow,
      Destroyercol,
      Destroyerdir,
      Submarinerow,
      Submarinecol,
      Submarinedir,
      Patrolboatrow,
      Patrolboatcol,
      Patrolboatdir,
    } = values;

    const board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));

    const alpha = 'ABCDEFGHIJ'.split('');
    const num = Array.from(Array(10), (_, i) => i + 1);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board[i][j] = alpha[i] + num[j];
      }
    }
    console.log(board);
    const shipSquares = (r, c, dir, len) => {
      const arr = [];
      if (dir === 0) {
        for (let i = 0; i < len; i++) {
          arr.push(board[r][c + i]);
        }
      } else {
        for (let i = 0; i < len; i++) {
          arr.push(board[r + i][c]);
        }
      }
      return arr;
    };

    const inter = (arr1, arr2) => _.intersection(arr1, arr2).length > 0;

    if (
      inter(
        shipSquares(Carrierrow, Carriercol, Carrierdir, 5),
        shipSquares(Battleshiprow, Battleshipcol, Battleshipdir, 4)
      ) ||
      inter(
        shipSquares(Carrierrow, Carriercol, Carrierdir, 5),
        shipSquares(Destroyerrow, Destroyercol, Destroyerdir, 3)
      ) ||
      inter(
        shipSquares(Carrierrow, Carriercol, Carrierdir, 5),
        shipSquares(Submarinerow, Submarinecol, Submarinedir, 3)
      ) ||
      inter(
        shipSquares(Carrierrow, Carriercol, Carrierdir, 5),
        shipSquares(Patrolboatrow, Patrolboatcol, Patrolboatdir, 2)
      )
    ) {
      console.log(shipSquares(Carrierrow, Carriercol, Carrierdir, 5));
      console.log(`Collision with Carrier! Move Ships`);
      return;
    } else if (
      inter(
        shipSquares(Battleshiprow, Battleshipcol, Battleshipdir, 4),
        shipSquares(Destroyerrow, Destroyercol, Destroyerdir, 4)
      ) ||
      inter(
        shipSquares(Battleshiprow, Battleshipcol, Battleshipdir, 4),
        shipSquares(Submarinerow, Submarinecol, Submarinedir, 4)
      ) ||
      inter(
        shipSquares(Battleshiprow, Battleshipcol, Battleshipdir, 4),
        shipSquares(Patrolboatrow, Patrolboatcol, Patrolboatdir, 3)
      )
    ) {
      console.log(`Collision with Battleship! Move Ships`);
      return;
    } else if (
      inter(
        shipSquares(Destroyerrow, Destroyercol, Destroyerdir, 4),
        shipSquares(Submarinerow, Submarinecol, Submarinedir, 4)
      ) ||
      inter(
        shipSquares(Destroyerrow, Destroyercol, Destroyerdir, 4),
        shipSquares(Patrolboatrow, Patrolboatcol, Patrolboatdir, 3)
      )
    ) {
      console.log(`Collision with Destroyer! Move Ships`);
      return;
    } else if (
      inter(
        shipSquares(Submarinerow, Submarinecol, Submarinedir, 4),
        shipSquares(Patrolboatrow, Patrolboatcol, Patrolboatdir, 3)
      )
    ) {
      console.log(`Collision with Submarine & Patrolboat! Move Ships`);
      return;
    } else {
    }
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <Form className='forms'>
            {fleet.map((x) => (
              <FormGroup name={x} key={x} />
            ))}
            <br />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={!dirty || !isValid}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};
