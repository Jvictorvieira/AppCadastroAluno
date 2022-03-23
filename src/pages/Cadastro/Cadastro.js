import React from "react";
import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import "./Cadastro.css";
import { useState } from "react";

function Cadastro() {
  const [values, setValue] = useState({
    nome:"",
    cpf:"",
    avaliacao:""
  });
  const onChange = (event) => {
    localStorage.setItem(event.target.name, event.target.value);
    setValue({...values, [event.target.name]: event.target.value});
  };
  console.log(values);
  return (
    <div className="row justify-content-center m-4">
      <div className="card p-0 col-sm-6">
        <div className="card-header bg-primary text-white fw-bold">Cadastro</div>
        <form className="row g-3 p-0 m-2">
          <div className="col-12">
            <FormInput 
                type="text"
                labelText="Nome:"
                labelclass="form-label"
                className="form-control"
                placeholder="Nome"
                value={values["nome"]}
                name="nome"
                onChange={onChange}
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              labelText="CPF:"
              labelclass="form-label"
              className="form-control"
              placeholder="___.___.___-__"
              value={values["cpf"]}
              name="cpf"
              onChange={onChange}
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              labelText="Avaliação:"
              labelclass="form-label"
              className="form-control"
              placeholder="0 - 10"
              value={values["avaliacao"]}
              name="avaliacao"
              onChange={onChange}
            />
          </div>
          <div className="col-12 d-flex justify-content-evenly">
            <Button type="submit" style="btn btn-primary" >
              Cadastrar
            </Button>
            <Button style="btn btn-primary">
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
