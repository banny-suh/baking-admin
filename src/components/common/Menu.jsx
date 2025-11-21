import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/unit-price-calculator" activeClassName="active">
            Unit Price Calculator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;