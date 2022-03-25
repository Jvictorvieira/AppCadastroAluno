import React from "react";
import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import { useLocation, useNavigate } from "react-router-dom";

function Alterar(props) {
  const data = useLocation()
  const aluno = data.state.aluno
  const navigate = useNavigate();
  
  return (
    <div className="row justify-content-center m-4">
      <div className="card p-0 col-sm-6">
        <div className="card-header bg-warning text-white fw-bold">
          Alterar
        </div>
        <form className="row g-3 p-0 m-2">
          <div className="col-12">
            <FormInput
                type="text"
                labelText="Matrícula:"
                labelclass="form-label"
                className="form-control"
                placeholder={`${aluno.matricula}`}
                value={""}
                name="matricula"
                disabled
            />
            <FormInput
              type="text"
              labelText="Nome:"
              labelclass="form-label"
              className="form-control"
              placeholder={`${aluno.nome}`}
              value={""}
              name="nome"
              
              pattern="^[A-Za-z0-9]{6,40}$"
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              labelText="CPF:"
              labelclass="form-label"
              className="form-control"
              placeholder={`${aluno.cpf}`}
              value={""}
              name="cpf"
              
              pattern="^[0-9]{11}$"            
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="number"
              labelText="Avaliação:"
              labelclass="form-label"
              className="form-control"
              placeholder={`${aluno.avaliacao}`}
              value={""}
              name="avaliacao"
              
              pattern="^[0-9]{0,2}$"
              min="0" 
              max="10"
            />
          </div>
          <div className="col-12 d-flex justify-content-evenly">
            <Button type="submit" style="btn btn-warning" onClick={() => navigate("/")}>
              Alterar
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

export default Alterar;
