import React from 'react';
import stl from './Card.module.css'
import { Link } from 'react-router-dom';
export default function Card ({name, min, max, onClose, img,id}) {  // se agrega el parámetro id
  return (
    <div className={stl.caja}>
     <button className={stl.btnC} onClick={onClose}>X</button>
     <Link to={`/ciudad/${id}`}>       {/*Acá linkea al id de cada ciudad que le pasemos por imput*/}
     <h3> {name}</h3>
     </Link>
      <div className={stl.temp}>
      <div>
       <p className={stl.p}> MIN</p>
       <p>{Math.round(min)}</p>
      </div>
    <div>
      <p className={stl.p}>MAX</p>
      <p>{Math.round(max)}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
    </div>
    </div>
  )
};
