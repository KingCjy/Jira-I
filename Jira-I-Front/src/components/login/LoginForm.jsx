import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

const LoginForm = ({ email, password, check, onChange }) => {
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
          Sign In
        </Typography>

        <Paper className={classes.paper}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              label="Email"
              fullWidth
              required
              className={classes.textField}
              name="email"
              value={email}
              onChange={onChange}
            />
            <TextField
              required
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
            <FormControlLabel
              control={
                <Checkbox
                  name="check"
                  checked={check}
                  value="check"
                  onChange={e => onChange(e, 'check')}
                  color="primary"
                />
              }
              label="Remember me"
              className={classes.rememberCheck}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              className={classes.button}
            >
              CONTINUE
            </Button>
          </form>
        </Paper>

        <Typography variant="caption" className={classes.loginTypo}>
          Dont't have an account?
        </Typography>
        <Typography variant="h6" color="primary">
          Create account
        </Typography>
      </div>
    </Grid>
  );
};

export default LoginForm;
