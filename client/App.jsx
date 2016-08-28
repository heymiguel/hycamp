import React, { PropTypes } from 'react';

import TopNav from './components/TopNav';

const propTypes = {
  children: PropTypes.node,
};

export default function App(props) {
  return (
    <div className="root">
      <header>
        <a href="http://localhost:8080/auth/login/github">github</a>
        <a href="http://localhost:8080/auth/login/facebook">facebook</a>
        <TopNav />
      </header>
      {props.children}
    </div>
  );
}

App.propTypes = propTypes;
