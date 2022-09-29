import React from 'react';
import stl from './SearchBar.module.css';
export default function SearchBar(props) {
  // acá va tu código

  return (
  <div className={stl.barra}>
      <input type = 'text' />
      <button className={stl.btnAgr}> AGREGAR </button>
  </div>
  )
};