import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import './App.css';
import TemporaryDrawer from './components/drawer';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: { main: purple[400] },
    secondary: { main: '#00c853' },
  },
});

const Board = (props) => {
  const alpha = 'ABCDEFGHIJ'.split('');
  const num = Array.from(Array(10), (_, i) => i + 1);
  const keys = (r, c) => alpha[r] + num[c];
  const row = [];

  for (let j = 0; j < 10; j++) {
    const column = [];
    for (let i = 0; i < 10; i++) {
      column.push(
        <div className={props.csquare} key={keys(i, j)}>
          {keys(i, j)}
        </div>
      );
    }
    row.push(
      <div className='column' id={num[j].toString()} key={num[j]}>
        {column}
      </div>
    );
  }

  return (
    <div className={props.cname}>
      {row}
      <span>{props.title}</span>
    </div>
  );
};

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className='container'>
        <div className='menu'>
          <TemporaryDrawer />
        </div>
        <div className='boards'>
          <Board cname='myBoard' csquare='mySquare' title='My Board' />
          <Board cname='enemyBoard' csquare='eSquare' title='Enemy Board' />
        </div>
      </div>
    </MuiThemeProvider>
  );
}
