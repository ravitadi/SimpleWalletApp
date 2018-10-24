import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './ui-components/GlobalHeader';
import Wallet from './ui-components/Wallet/index.jsx';
import funds from './backend/mockdata'; // this is just for temporary
import {CssBaseline} from '@material-ui/core';

const ThemeContext = React.createContext('Funds');

// TODO take the funds from the ContextApi.
class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div>
          <NavBar />
          <Wallet funds={funds}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
