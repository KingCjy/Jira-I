import React, { Fragment } from 'react';
// import Header from './template/Header';
import * as pages from 'pages/index';

import 'styles/utils.scss';
import 'styles/main.scss';

function App() {
  return (
    <Fragment>
      {/* <Header></Header> */}
      <pages.Login />
    </Fragment>
  );
}

export default App;
