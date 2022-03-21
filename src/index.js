import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App/App';
import Button from './componentes/Button/Button';
import FormInput from './componentes/Input/Input';

ReactDOM.render(
  <>
    <App></App>
    <Button color='btn-primary' onClick={''}>Novo</Button>
    <FormInput label={'oi'} placeholder={'aqui'}></FormInput>
  </>,
  document.getElementById('root')
);
