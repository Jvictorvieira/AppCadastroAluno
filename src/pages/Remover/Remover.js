import React from "react";
import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import { useNavigate } from "react-router-dom";

function Remover(props) {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center m-4">
      <div className="card p-0 col-sm-6">
        <div className="card-header bg-danger text-white fw-bold">
          Remover
        </div>
        <form className="row g-3 p-0 m-2" >
          <div className="col-12">
            <FormInput
                type="text"
                labelText="Matrícula:"
                labelclass="form-label"
                className="form-control"
                placeholder=""
                value={""}
                name="nome"
                disabled
            />
            <FormInput
              type="text"
              labelText="Nome:"
              labelclass="form-label"
              className="form-control"
              placeholder=""
              value={""}
              name="nome"
              pattern="^[A-Za-z0-9]{6,40}$"
              disabled
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="text"
              labelText="CPF:"
              labelclass="form-label"
              className="form-control"
              placeholder=""
              value={""}
              name="cpf"
              pattern="^[0-9]{11}$" 
              disabled           
            />
          </div>
          <div className="col-md-6">
            <FormInput
              type="number"
              labelText="Avaliação:"
              labelclass="form-label"
              className="form-control"
              placeholder=""
              value={""}
              name="avaliacao"
              pattern="^[0-9]{0,2}$"
              min="0" 
              max="10"
              disabled
            />
          </div>
          <div className="col-12 d-flex justify-content-evenly">
            <Button type="submit" style="btn btn-danger">
              Remover
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

export default Remover;
