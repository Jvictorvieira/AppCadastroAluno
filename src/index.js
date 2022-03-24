import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './componentes/Navbar/Navbar';
import Rota from './componentes/Rotas/Rotas';

ReactDOM.render(
  <>
    <Navbar/>
    <Rota/>
  </>,
  document.getElementById('root')
);
