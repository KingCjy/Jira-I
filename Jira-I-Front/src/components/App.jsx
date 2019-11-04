import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as pages from 'pages/index';
import '../styles/main.scss';
import { connect } from 'react-redux';
import BaseContainer from 'containers/base/BaseContainer';

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={pages.Login} />
        <Route exact path="/" component={pages.Project} />
        <Route component={pages.Error} />
      </Switch>
      <BaseContainer />
    </>
  );
}

const mapStateToProps = ({ login }) => ({
  logged: login.login.logged,
});

export default connect(mapStateToProps)(App);
