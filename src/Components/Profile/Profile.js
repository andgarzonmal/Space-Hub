import React from 'react';
import './profile.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ProfileMissions from './ProfileMissions';
import ProfileRockets from './ProfileRockets';

function ProfileContainer() {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rockets);
  const joinedRockets = rockets.filter((rocket) => rocket.rocketReserved === true);
  return (
    <div className="profile-container">
      <h1>My profile</h1>
      <div className="booked-container">
        <div className="missions">
          <h3 className="title">All MY MISSIONS</h3>
          {joinedMissions.map((mission) => (
            <ProfileMissions
              key={mission.mission_id}
              name={mission.mission_name}
            />
          ))}
        </div>
        <div className="rockets">
          <h3 className="title">ALL MY ROCKETS</h3>
          {joinedRockets.map((rocket) => (
            <ProfileRockets
              key={rocket.rocketId}
              name={rocket.rocketName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
