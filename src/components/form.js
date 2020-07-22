import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { initialValues, validationSchema } from './validation';
import './form.css';
import Gameboard from './gameboard';
import { output } from './tests/sampleData';
import FormGroup from './fields';

export default class ShipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  resetClick = () => this.setState({ isSubmitted: false });

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
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
              {this.state.isSubmitted && (
                <div className='boards'>
                  <Gameboard
                    input={values}
                    computer={1}
                    dis={true}
                    btnC='mySquare'
                  />
                  <Gameboard input={output} btnC='eSquare' />
                </div>
              )}
            </>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}
