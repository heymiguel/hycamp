import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function TopNav(props) {
  return (
    <div>
      <Link to="/">Events</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/feed">Feed</Link>
    </div>
  );
}

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;
