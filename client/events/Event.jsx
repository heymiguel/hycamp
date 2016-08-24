import React, { PropTypes } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function Event(props) {
  return (
    
      <Row>
        <Col xs={2}>
          12:00p
        </Col>
        <Col xs={5}>
          Event Title
        </Col>
        <Col xs={5}>
          Event Location
        </Col>
      </Row>
      
  );
}

Event.propTypes = propTypes;
Event.defaultProps = defaultProps;
