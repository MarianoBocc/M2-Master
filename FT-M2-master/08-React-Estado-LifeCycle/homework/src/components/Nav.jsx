import React from 'react'
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx'
import './Nav.module.css'
import stl from './Nav.module.css'

function Nav({onSearch}) {
  return (
      <nav className={stl.Box}>
        <div className={stl.Nav}>
        <img src={Logo} alt="Saraza" className={stl.Logo} />
        <h1 className={stl.Texto}>Henry-weather App</h1>
        <SearchBar onSearch={onSearch}  />
        </div>
     </nav>   
  )
}

export default Nav;
