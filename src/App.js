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

export default function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <TemporaryDrawer />
    </MuiThemeProvider>
  );
}