import React from 'react';
import './NavContext.scss';

function ContextGlobal() {
  return (
    <div className="nav_context">
      <div className="container">
        <div className="header">
          <div className="title"> Jira-I Software</div>
        </div>
        <div className="list">
          <ul>
            <li clasName="active">
              <a href="">내 작업</a>
            </li>
            <li>
              <a href="">내 작업</a>
            </li>
            <li>
              <a href="">내 작업</a>
            </li>
            <li>
              <a href="">내 작업</a>
            </li>
            <li>
              <a href="">내 작업</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContextGlobal;
