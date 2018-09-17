import React from 'react';
import { Map as ImmutableMap } from 'immutable';
import PropTypes from 'prop-types';

import './styles.css';

const ViewPopup = props => {
  // Checking if URI contains image extensions
  const checkImageURI = url => {
    return url.match(/\.(jpeg|jpg|gif|png)/) != null;
  };
  return (
    <div className="popup">
      <div className="popup__logo-container">
        <img
          className="logo"
          src={
            checkImageURI(props.markerData.get('logo'))
              ? props.markerData.get('logo')
              : 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png'
          }
          alt="logo"
        />
      </div>
      <div className="popup__title-container">
        <h2>{props.markerData.get('title')}</h2>
      </div>
      <div className="popup__position-container">
        <p className="position">{`Position: Lat ${props.markerData
          .get('lat')
          .toFixed(6)} - Long ${props.markerData.get('lng').toFixed(6)}`}</p>
      </div>
      <div className="popup__button-container">
        <button onClick={props.editMode} className="button">
          Edit
        </button>
        <button onClick={props.deleteMarker} className="button button_delete">
          Delete
        </button>
      </div>
    </div>
  );
};

ViewPopup.propTypes = {
  markerData: PropTypes.instanceOf(ImmutableMap).isRequired,
  editMode: PropTypes.func,
  deleteMarker: PropTypes.func
};

export default ViewPopup;
