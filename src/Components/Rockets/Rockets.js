import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../Redux/Rockets/rockets';
import OneBook from './oneRocket';
import './rockets.css';

const Rockets = () => {
  const rocketsArr = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <section className="rockets-wrapper">
      {rocketsArr.map((rocket) => (
        <div key={rocket.id} id={rocket.id} className="rocket-card">
          <OneBook rocket={rocket} />
        </div>
      ))}
    </section>
  );
};
export default Rockets;
