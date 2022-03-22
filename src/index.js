import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './componentes/Navbar/Navbar';
import Button from './componentes/Button/Button';
import FormInput from './componentes/Input/Input';

ReactDOM.render(
  <>
    <Navbar/>
    <Button color='btn-primary' onClick={''}>Novo</Button>
    <FormInput label={'oi'} placeholder={'aqui'}></FormInput>
  </>,
  document.getElementById('root')
);
