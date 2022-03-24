import React from "react";
import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import "./Cadastro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro(props) {
  
  const navigate = useNavigate();
  const [values, setValue] = useState({
    matricula: "",
    nome: "",
    cpf: "",
    avaliacao: "",
  });

  const onChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value, ['matricula']: props.listaAlunos.length + 1 });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLista((prevLista)=> ([...prevLista, values]))
    navigate("/")
  };

  return (
    <div className="row justify-content-center m-4">
      <div className="card p-0 col-sm-6">
        <div className="card-header bg-primary text-white fw-bold">
          Cadastro
        </div>
        <form className="row g-3 p-0 m-2" onSubmit={handleSubmit}>
          <div className="col-12">
            <FormInput
              type="text"
              labelText="Nome:"
              labelclass="form-label"
              className="form-control"
              placeholder="Nome"
              value={values["nome"]}
              name="nome"
              pattern="^[A-Za-z0-9]{6,40}$"
              onChange={onChange}
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              labelText="CPF:"
              labelclass="form-label"
              className="form-control"
              placeholder="999.999.999-99"
              value={values["cpf"]}
              name="cpf"
              pattern="^[0-9]{11}$"
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
              pattern="^[0-10]{0,2}$"
              onChange={onChange}
            />
          </div>
          <div className="col-12 d-flex justify-content-evenly">
            <Button type="submit" style="btn btn-primary">
              Cadastrar
            </Button>
            <Button style="btn btn-info" onClick={() => navigate("/")}>
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
