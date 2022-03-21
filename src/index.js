import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App/App';
import Button from './componentes/Button/Button';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    <Button color='btn-primary' onClick={''}>Novo</Button>
  </React.StrictMode>,
  document.getElementById('root')
);
