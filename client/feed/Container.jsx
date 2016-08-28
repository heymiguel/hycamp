import React, { PropTypes } from 'react';
import fetch from 'isomorphic-fetch';

import PhotoList from './PhotoList';

const propTypes = {
  // proptypes
};

const defaultProps = {
  // default props
};

function handleErrors(response) {
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.json();
}

export default class FeedContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      offset: 0,
      isFetching: false,
    };
  }

  componentWillMount() {
    this.getPhotos();
  }

  getPhotos() {
    this.setState({ isFetching: true });
    fetch(`/api/feed?offset=${this.state.offset}`, { method: 'GET' })
      .then(handleErrors)
      .then(data => {
        this.setState({
          photos: data.photos,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <PhotoList photos={this.state.photos} isFetching={this.state.isFetching} />
    );
  }
}

FeedContainer.propTypes = propTypes;
FeedContainer.defaultProps = defaultProps;
