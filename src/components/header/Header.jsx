import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Studio Ghibli Movies</h1>
      <NavLink to="/" exact activeStyle={{ display: 'none' }}>
        <p>Home</p>
      </NavLink>
    </header>
  );
};

export default Header;
