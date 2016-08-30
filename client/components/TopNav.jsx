import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import { Glyphicon, Grid, Row, Col } from 'react-bootstrap';

import './TopNav.scss';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function TopNav(props) {
  return (
    <nav className="top-nav">
      <Link to="/" className="top-nav-item" activeClassName="active" onlyActiveOnIndex>
        <Glyphicon glyph="calendar" />
        <span>Events</span>
      </Link>
      <Link to="/leaderboard" className="top-nav-item" activeClassName="active">
        <Glyphicon glyph="king" /><span>Scores</span>
      </Link>
      <Link to="/feed" className="top-nav-item" activeClassName="active">
        <Glyphicon glyph="camera" />
        <span>Feed</span>
      </Link>
    </nav>
  );
}

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;
