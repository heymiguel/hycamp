import React, { PropTypes } from 'react';
import { Glyphicon, Grid, Row, Col, Clearfix } from 'react-bootstrap';

import './Events.scss';


const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function FavoriteEvent(props) {
  return (
    <div className="favorite-event event">
      <Row>
        <Col xs={2} md={2} lg={2} className="text-center">
          <Glyphicon glyph="star" /> 12:45p
        </Col>
        <Col xs={5} md={5}>
          Event Name
        </Col>
        <Col xs={5} md={5}>
          Event Location
        </Col>
      </Row>
    </div>
  );
}

FavoriteEvent.propTypes = propTypes;
FavoriteEvent.defaultProps = defaultProps;
