import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './componentes/Navbar/Navbar';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';


ReactDOM.render(
  <>
    <Navbar/>
    <TelaPrincipal/>
  </>,
  document.getElementById('root')
);
