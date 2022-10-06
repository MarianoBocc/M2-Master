import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>         
  <App />
  </BrowserRouter>,
  document.getElementById('root')

);
//Este index renderiza la app del clima, al envolver el tag <app> con <BrowserRouter>
// le estamos permitiendo a route trabajar sobre la app para que cada componente tenga su propia ruta 