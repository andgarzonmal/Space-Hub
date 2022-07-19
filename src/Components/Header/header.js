import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {
  return (
    <nav>
      <div className="logo">
        <img className="logo-header" src={logo} alt="logo" />
        <h4>Title</h4>
      </div>
      <div className="links">
        <NavLink className="link" to="/"> Missions</NavLink>
        <NavLink className="link" to="/Rockets"> Rockets</NavLink>
        {' '}
        <NavLink className="link" to="/Profile"> Profile</NavLink>
      </div>
    </nav>
  );
}

export default Header;
