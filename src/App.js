import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import React from 'react';
import './App.css';
import TemporaryDrawer from './components/drawer';
import Board from './components/board';
import { eventFire } from './components/player';

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
        <div className='menu'>
          <TemporaryDrawer />
        </div>
        <div className='boards'>
          <Board
            cname='myBoard'
            csquare='mySquare'
            title='My Board'
            ids='m'
            fire='mfire'
            dis={true}
          />
          <Board
            cname='enemyBoard'
            csquare='eSquare'
            title='Enemy Board'
            ids='e'
            event={eventFire}
            fire='fire'
            eSunk='eSunk'
          />
        </div>
      </div>
    </MuiThemeProvider>
  );
}
