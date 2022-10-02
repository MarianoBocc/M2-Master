import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav>
        <img src={Logo} alt="Saraza" />
        <h1>Henry-weather App</h1>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;
