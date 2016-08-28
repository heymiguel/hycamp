import React, { PropTypes } from 'react';
import './Photo.scss';
import linkify from 'linkify-instagram';

const propTypes = {
  photo: PropTypes.object.isRequired,
};

const defaultProps = {
  // Default props go here
};


export default function Photo({ photo }) {
  return (
    <div "photo-wrapper">
      <div className="img-container">
        <img className="img" src={photo.thumbnail_gallery} alt={photo.text} />
      </div>
      <div className="img-details">
        <div className="avatar-container">
          <img
            className="avatar"
            src={asset.user_avatar_url}
            alt={asset.user_screen_name}
          />
          <a href={`https://instagram.com/${asset.user_screen_name}`}>{asset.user_screen_name}</a>
        </div>
        <div 
          className="caption" 
          dangerouslySetInnerHTML={{
            __html: linkify(asset.text)
          }}
        />
      </div>
    </div>
  );
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;
