import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function App(props) {
  return (
    <div>
      <h1>This is the main app!</h1>
      {props.children}
    </div>
  );
}

App.propTypes = propTypes;
