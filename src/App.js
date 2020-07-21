import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import './App.css';
import Gameboard from './components/gameboard';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: { main: purple[400] },
    secondary: { main: '#00c853' },
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className='container'>
        <div className='menu'>{/*<TemporaryDrawer />*/}</div>
        <div className='boards'>
          <Gameboard
            btnC='mySquare'
            dis={true}
            who='My Board'
            ids='m'
            computer={1}
          />
          <Gameboard btnC='eSquare' who='Enemy Board' ids='e' />
        </div>
      </div>
    </MuiThemeProvider>
  );
}
