import React, { Component } from 'react'

import {Grid, List, ListItem, Divider} from '@material-ui/core'

import NewFundForm from '../NewFundForm/'
import Summary from '../Summary/'

class Wallet extends Component {

  constructor(props){
    super(props);
    this.state = {
      funds: props.funds || [],
      isFundsFormActive: false,
      activeFund: props.funds && props.funds[0] || {}
    }
  }

  onToggleNewFundForm = () => {
    this.setState(state => {
      return {isFundsFormActive: !state.isFundsFormActive}
    }
    )
  }

  onFundSelect = (item) => {
    this.setState(state => {
      return {activeFund: item};
    })
  }

  render() {
    return (
      <div role='main'>
        <Grid container spacing={24}>
          <Grid item xs={6}>
              <NewFundForm />
              <Funds onSelectedFund={this.onFundSelect} funds={this.state.funds} />
          </Grid>
          <Grid item xs={6}>
            <Summary detail={this.state.activeFund} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

function ListItemLink(props) {
  return <ListItem button divider component="a" {...props} />;
}

// TODO these funds should go on a seperate funds page.
const Funds = ({funds, onSelectedFund}) => {
  // Read the funds state from here.
  return (
    <List component="nav">
    {funds && funds.map((item, i) =>
        <ListItemLink key={i}  onClick={() => onSelectedFund(item)} href="#">
            <Fund details={item.data} />
        </ListItemLink>
    )}
  </List>
  )
}

function Fund(props) {
  return (
    <div>
      <span>{props.details && props.details.source}</span>
    </div>
  )
}

export default Wallet
