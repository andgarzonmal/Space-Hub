import React from 'react';
import propTypes from 'prop-types';
import './Mission.css';
import { useDispatch } from 'react-redux';
import { joinMission, unJoinMission } from '../../Redux/Mission/Mission';

function Mission({
  name, description, id, reserved,
}) {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.missions);

  const handleJoin = () => {
    dispatch(joinMission(id));
  };

  const handleUnJoin = () => {
    dispatch(unJoinMission(id));
  };

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
        <span className={reserved ? 'leave' : 'join'}>{reserved ? 'Active Member' : 'Not a Member' }</span>
      </div>
      <div className="center-items grid-item">
        <button type="button" onClick={(id) => (reserved ? handleUnJoin(id) : handleJoin(id))}>join mission</button>
      </div>
    </div>
  );
}

export default Mission;

Mission.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};
