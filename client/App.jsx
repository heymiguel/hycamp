import React, { PropTypes } from 'react';

import TopNav from './components/TopNav';

const propTypes = {
  children: PropTypes.node,
};

export default function App(props) {
  return (
    <div>
      <TopNav />
      {props.children}
    </div>
  );
}

App.propTypes = propTypes;
