import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loginWrap: {
    height: '100%',
  },
  paper: {
    width: 500,
    padding: 20,
  },
  loginBar: {
    width: '100%',
    backgroundColor: theme.indigo,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    display: 'block',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.loginWrap}
    >
      <Paper className={classes.paper}>
        <div className={classes.loginBar}>로그인</div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            required
            label="ID"
            className={classes.textField}
            margin="normal"
            fullWidth
          />
          <TextField
            required
            label="PW"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            fullWidth
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
