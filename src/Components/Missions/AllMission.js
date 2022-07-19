import { useDispatch, useSelector } from 'react-redux/es/exports';
import React, { useEffect } from 'react';
import Mission from './Mission';
import './Mission.css';
import { displayMissions } from '../../Redux/Mission/Mission';

function AllMission() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMissions());
  }, []);

  return (
    <div className="table-container">
      <div className="table-head">
        <li>Mission</li>
        <li>Description</li>
        <li className="status">Status</li>
      </div>
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
        />
      ))}
    </div>
  );
}

export default AllMission;
