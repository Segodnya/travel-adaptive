import React from 'react';
import './BurgerMenu.css';
import { Logo } from './Logo';

export const BurgerMenu = ({ menuActive, toggleMenu }) => {
  return (
    <div className={`burger-menu ${menuActive ? 'active' : ''}`}>
      <div className="burger-menu__header">
        <Logo device="mobile" />
        <button className="button-menu burger-menu__button" onClick={toggleMenu} />
      </div>
      <ul className="burger-menu__links">
        <li>Календарь</li>
        <li>Отзывы</li>
        <li>Магазин</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};
