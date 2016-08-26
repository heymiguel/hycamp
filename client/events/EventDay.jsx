import React, { PropTypes } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import Event from './Event.jsx';

import './Events.scss';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function EventDay(props) {
  return (
    <div className="event-day">
      <Row>
        <Col xs={7}>
          <div className="primary-bar">
            <h4>OneDay</h4>
          </div>
        </Col>
      </Row>
      <Event />
      <Event />
    </div>
  );
}

EventDay.propTypes = propTypes;
EventDay.defaultProps = defaultProps;
