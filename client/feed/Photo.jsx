import React, { PropTypes } from 'react';
import linkify from 'linkify-instagram';
import './Photo.scss';

const propTypes = {
  photo: PropTypes.object.isRequired,
};

const defaultProps = {
  // Default props go here
};


export default function Photo({ photo }) {
  return (
    <div className="photo-wrapper">
      <div className="img-container">
        <img className="img" src={photo.thumbnail_gallery} alt={photo.text} />
      </div>
      <div className="img-details">
        <div className="author-details">
          <img
            className="avatar"
            src={photo.user_avatar_url}
            alt={photo.user_screen_name}
          />
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

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;
