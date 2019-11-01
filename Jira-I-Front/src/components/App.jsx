import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Header from './template/Header';
import * as pages from 'pages/index';
import '../styles/main.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={pages.Login} />
      <Route exact path="/project" component={pages.Project} />
    </Switch>
  );
}

export default App;
