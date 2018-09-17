import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const EditPopup = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="popup">
        <div>
          <input
            placeholder="Insert new title"
            name="title"
            type="text"
            onChange={props.handleChange}
            value={props.title}
          />
          <input
            placeholder="Insert new image URL"
            name="logo_url"
            type="text"
            onChange={props.handleChange}
            value={props.logoUrl}
          />
        </div>
        <div className="popup__button-container">
          <button type="submit" className="button">
            Save
          </button>
          <button
            type="button"
            className="button button_back"
            onClick={props.goBack}
          >
            Back
          </button>
        </div>
      </div>
    </form>
  );
};

EditPopup.propTypes = {
  goBack: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  logoUrl: PropTypes.string,
  title: PropTypes.string
};

export default EditPopup;
