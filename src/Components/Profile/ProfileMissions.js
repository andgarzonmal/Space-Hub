import React from 'react';
import propTypes from 'prop-types';

function ProfileMissions({ name }) {
  return (
    <div className="mission-container">
      <h4>Mission Name</h4>
      <p>{name}</p>
    </div>
  );
}

export default ProfileMissions;

ProfileMissions.propTypes = {
  name: propTypes.string.isRequired,
};
