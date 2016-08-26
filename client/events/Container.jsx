import React, { PropTypes } from 'react';

import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import FavoriteEvent from './FavoriteEvent.jsx';
import EventDay from './EventDay.jsx';

import './Events.scss';

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
          <Col xs={12}>
            <div className="primary-bar">
              <Row>
                <Col xs={3} md={2} lg={2}>
                  <h5 className="text-center header">Time</h5>
                </Col>
                <Col xs={4} md={5}>
                  <h5 className="header">Event</h5>
                  
                </Col>
                <Col xs={5} md={5}>
                  <h5 className="header">Location</h5>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="event-favorite-container">

          <FavoriteEvent />
          <FavoriteEvent />

        </div>

        <EventDay />
        <EventDay />

      </Grid>
    );
  }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;
