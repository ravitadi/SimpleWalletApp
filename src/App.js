import React, { Component, Fragment } from 'react'
import './App.css'
import NavBar from './ui-components/GlobalHeader'
import Wallet from './ui-components/Wallet/index.jsx'
import {CssBaseline} from '@material-ui/core'

import {FundsContext} from './ui-components/FundsContext'

// TODO take the funds from the ContextApi.
class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div>
          <NavBar />
          <FundsContext.Consumer>
            {data => (<Wallet funds={data.funds} />)}
          </FundsContext.Consumer>
        </div>
      </Fragment>
    );
  }
}

export default App;
