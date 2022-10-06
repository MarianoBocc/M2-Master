import React from 'react'
import Logo from './logoHenry.png'
import SearchBar from './SearchBar.jsx'
import './Nav.module.css'
import stl from './Nav.module.css'
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    //   <nav className={stl.Box}>
    //    <div className={stl.Nav}> 
    //     <Link to = '/'>
    //     <img src={Logo} alt="Saraza" className={stl.Logo} />
    //     <h1 className={stl.Texto}>Henry-weather App</h1>
    //     </Link>
    //     <Link to='/about'>
    //     <span>About</span>
    //     </Link>
    //     <SearchBar onSearch={onSearch}  />
    //     </div>
    //  </nav>  
       <nav className={stl.Box}>
       <Link to={'/'}>
         <span className={stl.Nav}>
           <img id="logoHenry" src={Logo} className={stl.Logo} alt="" />
           <h1 className={stl.Texto}>Henry - Weather App</h1>
         </span>
       </Link>
       <Link to={'/about'}>
         <span>About</span>
       </Link>
         <SearchBar onSearch={onSearch}
         />
     </nav>
  )
}

export default Nav;