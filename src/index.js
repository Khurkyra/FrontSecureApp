import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css'; // Si estás usando estilos, ajusta la ruta si es diferente
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Asegúrate de que "root" coincide con el ID en public/index.html
);
