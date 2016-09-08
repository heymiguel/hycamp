import React, { PropTypes } from 'react';
import classNames from 'classnames';
import linkify from 'linkify-instagram';
import './Photo.scss';

const propTypes = {
  photo: PropTypes.object.isRequired,
};

const defaultProps = {
  // Default props go here
};

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.avatarLoaded = this.avatarLoaded.bind(this);
    this.photoLoaded = this.photoLoaded.bind(this);
    this.state = {
      avatarLoaded: false,
      photoLoaded: false,
    };
  }

  avatarLoaded(e) {
    this.setState({
      avatarLoaded: true,
    });
  }

  photoLoaded(e) {
    this.setState({
      photoLoaded: true,
    });
  }

  render() {
    const { photo } = this.props;
    const { avatarLoaded, avatarErr, photoErr, photoLoaded } = this.state;
    return (
      <div className="photo-wrapper" key={photo.uuid}>
        <div className="img-container">
          <img
            className={classNames('img', {
              loaded: photoLoaded,
            })}
            src={photo.thumbnail_gallery}
            alt={photo.text}
            onLoad={this.photoLoaded}
          />
        </div>
        <div className="img-details">
          <div className="author-details">
            <div
              className={classNames('avatar-wrapper', {
                loaded: avatarLoaded,
              })}
            >
              <img
                className={classNames('avatar', {
                  loaded: avatarLoaded,
                })}
                src={photo.user_avatar_url}
                alt={photo.user_screen_name}
                onLoad={this.avatarLoaded}
              />
            </div>
            <a className="user-name" href={`https://instagram.com/${photo.user_screen_name}`}>
              @{photo.user_screen_name}
            </a>
          </div>
          <div
            className="caption"
            dangerouslySetInnerHTML={{
              __html: linkify(photo.text),
            }}
          />
        </div>
      </div>
    );
  }
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;
