import React, { PropTypes } from 'react';

import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import Photo from './Photo';

const propTypes = {
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const defaultProps = {
  // default props
};

export default class PhotoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // initial state
    };
  }

  renderPhotos(photos, isFetching) {
    if (!photos.length && !isFetching) {
      return <div>No photos!</div>;
    }
    return photos.map(photo => {
      return (<Photo
        key={photo.uuid}
        photo={photo}
      />);
    });
  }

  renderLoader(isFetching) {
    if (isFetching) {
      return (<div className="loading">Loading!</div>);
    }
    return null;
  }

  render() {
    return (
      <Grid>
        <Row>
          <div className="primary-bar fixed-bar">
            <h5 className="text-center header">
              Use <strong>#hycamp</strong> to see your photos here!
            </h5>
          </div>
        </Row>
        <Row className="with-fixed-bar">
          <Col xs={12}>
            {this.renderPhotos(this.props.photos, this.props.isFetching)}
            {this.renderLoader(this.props.isFetching)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

PhotoList.propTypes = propTypes;
PhotoList.defaultProps = defaultProps;
