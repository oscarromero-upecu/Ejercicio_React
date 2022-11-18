import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Si desea comenzar a medir el rendimiento en su aplicación, pase una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto final de análisis. Más información: https://bit.ly/CRA-vitals

