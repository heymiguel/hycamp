import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.node,
};

export default function App(props) {
  return (
    <div>
      <h1>This is the main app!</h1>
      <Link to="/">Events</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/feed">Feed</Link>
      {props.children}
    </div>
  );
}

App.propTypes = propTypes;
