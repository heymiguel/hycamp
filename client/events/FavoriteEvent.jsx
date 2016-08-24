import React, { PropTypes } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';


const propTypes = {
  // proptypes go here
};

const defaultProps = {
  // Default props go here
};

export default function FavoriteEvent(props) {
  return (
    <Row>
        <Col xs={2} md={2} lg={2}>
          STAR! 12:45p
        </Col>
        <Col xs={5} md={5}>
          Event Name
        </Col>
        <Col xs={5} md={5}>
          Event Location
        </Col>
      </Row>
  );
}

FavoriteEvent.propTypes = propTypes;
FavoriteEvent.defaultProps = defaultProps;
