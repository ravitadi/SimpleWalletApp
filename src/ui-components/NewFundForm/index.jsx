import React from 'react'
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';

import {FundsContext} from '../FundsContext'
import FundModel from '../../backend/models/FundModel'

// I would use L10n module here && icon module
const Content = {
  addFund: '+ Add fund',
  title: 'Add a new fund',
  add: 'Add'
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
   margin: theme.spacing.unit,
 }
});

class NewFundForm extends React.Component {
  state = {
    open: false,
    multiline: 'Controlled',
    currency: 'USD'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    console.log('clicking the form');
    event.preventDefault()
    const data = new FormData(event.target);
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    }).then(function(response) {
      // TODO need to update the React.context api of funds here to the respestive component can take effect.
      this.setState({ open: false });
      return response.blob();
    }).catch(err => {
      console.error('Unable to make a call');
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="primary" onClick={this.handleClickOpen}>{Content.addFund}</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <form onSubmit={this.handleSubmit}>
          <DialogTitle id="form-dialog-title">{Content.title}</DialogTitle>
          <DialogContent>
              <TextField
                required
                id="standard-firstname"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
              />

              <TextField
                required
                id="standard-lastname"
                label="LastName"
                defaultValue=""
                className={classes.textField}
                margin="normal"
              />

              <TextField
                required
                autoFocus
                margin="dense"
                id="standard-ccnumber"
                label="Credit card number"
                type="text"
                fullWidth
              />

              <TextField
                  required
                  id="standard-expire"
                  label="Expires"
                  placeholder="01/19"
                  className={classes.textField}
                  margin="normal"
              />

              <TextField
                required
                id="standard-csc"
                label="CSC"
                defaultValue=""
                type="number"
                pattern="[0-9]{1,3}"
                className={classes.textField}
                margin="normal"
              />
          </DialogContent>
          <DialogActions>
          <Button type="submit" variant="contained" fullWidth color="primary" className={classes.button}>
            {Content.add}
          </Button>
          </DialogActions>
        </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(NewFundForm);
