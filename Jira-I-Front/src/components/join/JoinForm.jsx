import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    height: '100%',
  },
  loginWrap: {
    width: 400,
    textAlign: 'center',
  },
  loginTypo: {
    marginTop: theme.spacing(2),
    color: '#ccc',
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'block',
  },
  rememberCheck: {
    color: '#aaa',
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const JoinForm = ({ email, password, check, onChange, onSubmit }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <div className={classes.loginWrap}>
        <Typography variant="h2" color="primary">
          Jira-I
        </Typography>
        <Typography variant="h4" className={classes.loginTypo}>
          Sign Up
        </Typography>

        <Paper className={classes.paper}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              margin="normal"
              required
              className={classes.textField}
              name="email"
              value={email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              label="PhoneNuber"
              fullWidth
              margin="normal"
              required
              className={classes.textField}
              name="email"
              value={email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              label="UserName"
              fullWidth
              margin="normal"
              required
              className={classes.textField}
              name="email"
              value={email}
              onChange={onChange}
            />
            <TextField
              required
              variant="outlined"
              label="Password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
              type="password"
              className={classes.textField}
              name="password"
              value={password}
              onChange={onChange}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              className={classes.button}
            >
              SIGN UP
            </Button>
          </form>
        </Paper>
      </div>
    </Grid>
  );
};

export default JoinForm;
