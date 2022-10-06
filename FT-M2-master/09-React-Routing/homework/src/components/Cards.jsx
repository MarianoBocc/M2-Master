import React from 'react';
import Card from './Card';
import stl from './Cards.module.css';
export default function Cards({cities, onClose}) {
  return (
<div className={stl.caja}>
  {

    cities.map(c =>            //este map pone dentro del card todos esos atributos del objeto 
     <Card
     key ={c.id}
     id ={c.id}
     max={c.max}
     min={c.min}
     name={c.name}
     img={c.img}
     onClose={() => onClose(c.id)}    //esta función flecha devuelve la "invocación" de la func onClose, NO la ejecuta!!!
     />
   )
  //: <h3> No Hay Ciudades</h3> 
 }
</div>
)
};
