import React, { PropTypes } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import Event from './Event.jsx';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function EventDay(props) {
  return (
    <div>
      <Row>
        <Col xs={7} className="primary-bar">
          OneDay
        </Col>
      </Row>
      <Event />
      <Event />
    </div>
  );
}

EventDay.propTypes = propTypes;
EventDay.defaultProps = defaultProps;
