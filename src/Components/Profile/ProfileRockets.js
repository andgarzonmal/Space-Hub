import React from 'react';
import propTypes from 'prop-types';

function ProfileRockets({ name }) {
  return (
    <div className="Rocket-container">
      <h4>Mission Name</h4>
      <p>{name}</p>
    </div>
  );
}

export default ProfileRockets;

ProfileRockets.propTypes = {
  name: propTypes.string.isRequired,
};
