import React from 'react';
import PropTypes from 'prop-types';
import './oneRocket.css';

const OneRocket = ({ rocket }) => {
  const {
    id,
    rocketName,
    description,
    flickrImages,
  } = rocket;

  return (
    <div className="rocket" id={id}>
      <div className="image"><img src={flickrImages} alt="" /></div>
      <div className="column">
        <h2 className="rocket-name">
          {rocketName}
        </h2>
        <p className="rocket-description">{description}</p>

        <button type="button" className="button">Reserve Rockets</button>
      </div>
    </div>
  );
};

OneRocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rocket: PropTypes.arrayOf.isRequired,
};

export default OneRocket;
