import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
   const [cities, setCities] = useState([]); //cities es un array, setCities es la función que actualiza el estado.EN EL CP HAY Q PONER React.useState!!!
   const apiKey = '4ae2636d8dfbdc3044bede63951a019b';     //Esto hay q invetigarlo, pero sirve para llamarla en el fetch
   function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)    //Fetch permite hacr consultas a la Api externa
      .then(response => response.json())        //cuando fetch termine se debe sobreescribir response en http y pasarlo a un json (ESTO ES UNA PROMESA)
      .then((recurso) => {                      // Esto sería lo q estaba buscando dentro del objeto en la API
        if(recurso.main !== undefined){         //Si, lo que está contenido en ese objeto es diferente de undefined extraer los valores de los parámetros 
          const ciudad = {                      //que necesitamos para mostrar en pantalla. recurso = response_json
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);    //setCities es la func q actualiza el estado del arr. Como parámetro le pasa una func flecha
        } else {                                             // que tiebe dentro un arr con las ciudades ya invocadas y le suma la que le pasamos nueva en 
          alert("Ciudad no encontrada");                     // el imput (Sería un tipo de push). Está usando spread operatot (...)
        }                                                    // El else es un alerta por si la ciudad pasada no está en la API
      });
    }
        function onClose(id) {                                          //El parámetro id nos dice cual queremos borrar con el onClose
            setCities(oldCities => oldCities.filter(c => c.id !== id));  //Le hacemos un filter al arr oldCities y el parámetro es la func flecha c = city
        }                                                               // y le decimos q se quede con todos los c.id  q sean diferentes del id parámetro 
                                                                        // de la func onClose
    
    //agrega la ciudad al array de ciudades, usando el 
    //hook useState y su funcion setCities para actualizar el estado de cities y su funcion onSearch 
    //para agregar una ciudad al array de ciudades en el estado de cities y su funcion
  

  return (
    <div className="App">                              {/*esto da estilo al div*/}
      <Nav onSearch={onSearch}/>;                      {/*invoca la func onSearch en nav*/ }
      <Cards cities={cities} onClose={onClose}/>;       {/* en cards invoca el array cities y el onclose */}
    </div>
  );
}

