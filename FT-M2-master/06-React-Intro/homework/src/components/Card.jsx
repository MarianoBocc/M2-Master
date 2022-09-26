import React from 'react';

export default function Card({min, max, name, img, onClose}) {
 
  return (<div>
    <button onClick={onClose}> X </button>
    <h2> {name} </h2>
    <div>
      <p>Min</p>
      <p> {min} </p>  
    </div>
    <div>
      <p>Max</p>
      <p> {max} </p>
    </div>
    <img src = {`http://openweathermap.org/img/wn/${img}@2x.png`} alt = 'Nothing to show'/>
  </div>)
};