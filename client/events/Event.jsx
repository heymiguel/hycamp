import React, { PropTypes } from 'react';
import { Glyphicon, Grid, Row, Col, Clearfix } from 'react-bootstrap';

const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function Event(props) {
  return (
    
      <div className="event">
      <Row>
        <Col xs={2} className="text-center">
          <Glyphicon glyph="star-empty" /> 12:00p
        </Col>
        <Col xs={5}>
          Event Title
        </Col>
        <Col xs={5}>
          Event Location
        </Col>
      </Row>
      </div>
      
  );
}

Event.propTypes = propTypes;
Event.defaultProps = defaultProps;
