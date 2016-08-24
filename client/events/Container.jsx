import React, { PropTypes } from 'react';

import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import FavoriteEvent from './FavoriteEvent.jsx';
import EventDay from './EventDay.jsx';

const propTypes = {
  // proptypes
};

const defaultProps = {
  // default props
};

export default class EventsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // initial state
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={12}>
            <h1 className="text-center">Events Container</h1>
          </Col>
        </Row>
        <Row className="primary-bar">
          <Col xs={2} md={2} lg={2}>
            Time
          </Col>
          <Col xs={5} md={5}>
            Event
          </Col>
          <Col xs={5} md={5}>
            Location
          </Col>
        </Row>

        <FavoriteEvent />
        <FavoriteEvent />

        <EventDay />
        <EventDay />

      </Grid>
    );
  }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;
