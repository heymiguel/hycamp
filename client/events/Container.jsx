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
      events: [
        {
          name: 'Database Marketing',
          location: '1295 Scoville Road',
          date: '9/10/2016',
          start_time: '5:50 PM',
          duration: '1.1',
        },
        {
          name: 'Tour Operators',
          location: '6867 Crescent Oaks Lane',
          date: '9/9/2016',
          start_time: '12:18 PM',
          duration: '2.6',
        },
        {
          name: 'Wiring',
          location: '47970 Schmedeman Lane',
          date: '9/10/2016',
          start_time: '1:00 PM',
          duration: '2.9',
        },
        {
          name: 'Ion Chromatography',
          location: '705 Twin Pines Alley',
          date: '9/10/2016',
          start_time: '6:06 PM',
          duration: '1.2',
        },
        {
          name: 'Business Objects Data Integrator',
          location: '934 Larry Point',
          date: '9/9/2016',
          start_time: '6:08 PM',
          duration: '2.4',
        },
        {
          name: 'Post Production',
          location: '41617 Morningstar Point',
          date: '9/10/2016',
          start_time: '8:44 PM',
          duration: '1.8',
        },
        {
          name: 'VMware Certified Professional',
          location: '32756 Porter Alley',
          date: '9/9/2016',
          start_time: '8:43 PM',
          duration: '1.8',
        },
        {
          name: 'Core FTP',
          location: '19913 Manitowish Avenue',
          date: '9/9/2016',
          start_time: '7:40 PM',
          duration: '1.5',
        },
      ],
      days: [],
    };
  }

  compare(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  splitByDate(events, day) {
    const dayEvents = [];
    for (const event of events) {
      if (event.date === day) {
        dayEvents.push(event);
      }
    }
    return dayEvents;
  }

  getDays(events) {
    if (!events.length) {
      return <div>No Events!</div>;
    }
    for (const event of events) {
      if (this.state.days.indexOf(event.date) === -1) {
        this.state.days.push(event.date);
      }
    }
    // console.log(this.state.days);
    return this.state.days;
  }


  renderDays(days) {
    if (!days.length) {
      return <div>No events!</div>;
    }
    return days.map(day => {
      return (<EventDay
        key={day}
        day={day}
        events={this.splitByDate(this.state.events, day)}
        />);
    });
  }

  render() {
    // sort events so they display in asc order
    this.events = this.state.events.sort(this.compare);
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

        {this.renderDays(this.getDays(this.state.events))}

      </Grid>
    );
  }
}

EventsContainer.propTypes = propTypes;
EventsContainer.defaultProps = defaultProps;
