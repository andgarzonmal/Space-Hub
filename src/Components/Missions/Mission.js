import React from 'react';
import propTypes from 'prop-types';
import './Mission.css';

function Mission({ name, description }) {
  return (
    <div className="mission">
      <div className="grid-item">
        <h4 className="center-items">{name}</h4>
      </div>
      <div className="grid-item">
        <p className="description">
          {description}
        </p>
      </div>
      <div className="grid-item">
        <span className="center-items">Not A Member</span>
      </div>
      <div className="center-items grid-item">
        <button type="button">join mission</button>
      </div>
    </div>
  );
}

export default Mission;

Mission.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
