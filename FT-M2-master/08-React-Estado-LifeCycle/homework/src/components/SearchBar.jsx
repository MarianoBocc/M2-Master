import React, {useState} from 'react';            //Agregar {useState}
import stl from './SearchBar.module.css';
export default function SearchBar({onSearch}) {     //La func searchBar tiene como parámetro onSearch, que tiene como cuerpo una const con un estado de 
  const [city, setCity] = useState('');             // setCity y el parámetrp de ese estado es un string vacio
  let modificadorDeImput = (event)=>{     //esta variable almacena una func flecha donde setCity que "pushea" la ciudad q pasamos como input con el parámetro
    setCity(event.target.value);          // event, pasaso por parámetro en el onSubmit .targert.value es el método para encontrar ese valor q estamos buscando
  }
  return (
    <div className={stl.barra}>
    <form onSubmit={(event) => {    //Esto es un formulario que hace el onSearch
      event.preventDefault();     // impide recargar la página
      onSearch(city);
      setCity('');                //Borra el imput despues de hacer la busqueda
    }}>
      <input

        type="text"
        placeholder="Ciudad..."
        onChange= {modificadorDeImput}     // este es un evento que transforma setCity en un event.target.value
        value = {city}                    //El valor q recibe el imput es un city
      />
      <input className={stl.btnAgr} type="submit" value="Agregar" /> {/*Al hacer click en agregar hace un evento submit*/ }
    </form>
    </div>
  );
}