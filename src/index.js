import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './componentes/Navbar/Navbar';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';
import Cadastro from './pages/Cadastro/Cadastro';

ReactDOM.render(
  <>
    <Navbar/>
    <Cadastro/>
  </>,
  document.getElementById('root')
);
