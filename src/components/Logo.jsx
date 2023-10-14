import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/app-icon.svg';
import './Logo.css';

export const Logo = ({ device }) => {
  return (
    <Link to="#" className={`header__logo header__logo_device_${device}`}>
      <img src={icon} alt="app-icon" />
    </Link>
  );
};
