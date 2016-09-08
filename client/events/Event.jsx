import React, { PropTypes } from 'react';
import { Glyphicon, Grid, Row, Col, Clearfix } from 'react-bootstrap';

const propTypes = {
  // proptypes go here
  event: PropTypes.object.isRequired,
};

const defaultProps = {
  // Default props go here
};

export default class Event extends React.Component {
  render() {
    const { event } = this.props;
    return (
        <div className="event">
        <Row>
          <Col xs={2} className="text-center">
            <Glyphicon glyph="star-empty" />&nbsp;
            {event.start_time}
          </Col>
          <Col xs={5}>
            {event.name}
          </Col>
          <Col xs={5}>
            {event.location}
          </Col>
        </Row>
        </div>
    );
  }
}

Event.propTypes = propTypes;
Event.defaultProps = defaultProps;
