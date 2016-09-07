import React, { PropTypes } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import Event from './Event.jsx';

import './Events.scss';

const propTypes = {
  // proptypes go here
  events: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
};

const defaultProps = {
  // Default props go here
};

export default class EventDay extends React.Component {

  compare(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  renderEvent(events) {
    if (!events.length) {
      return <div>No events!</div>;
    }
    return events.sort(this.compare).map(event => {
      return (<Event
        key={event.name}
        event={event}
      />);
    });
  }

  render() {
    const { day } = this.props;
    return (
      <div className="event-day">
        <Row>
          <Col xs={7}>
            <div className="primary-bar">
              <h4>{day}</h4>
            </div>
          </Col>
        </Row>
        {this.renderEvent(this.props.events)}
      </div>
    );
  }
}

EventDay.propTypes = propTypes;
EventDay.defaultProps = defaultProps;
