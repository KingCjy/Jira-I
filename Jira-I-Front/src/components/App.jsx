import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from 'components/auth/AuthRoute';
import * as pages from 'pages/index';
import '../styles/main.scss';
import { connect } from 'react-redux';

function App(props) {
  console.log(props.logged);
  return (
    <>
      <Switch>
        <Route exact path="/login" component={pages.Login} />
        <Route exact path="/join" component={pages.Join} />
        <AuthRoute
          authenticated={props.logged}
          path="/"
          render={props => <pages.Project {...props} />}
        />
        <Route component={pages.Error} />
      </Switch>
    </>
  );
}

const mapStateToProps = ({ login }) => ({
  logged: login.login.logged,
});

export default connect(mapStateToProps)(App);
