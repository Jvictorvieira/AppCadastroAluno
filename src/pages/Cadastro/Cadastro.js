import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="row justify-content-center m-4">
      <div class="card p-0 col-sm-6">
        <div class="card-header bg-primary text-white fw-bold">Cadastro</div>
        <form class="row g-3 p-0 m-2">
          <div class="col-12">
            <FormInput
              type="text"
              labelText="Nome"
              labelClass="form-label"
              className="form-control"
              placeholder="Nome"
            />
          </div>
          <div class="col-md-6">
            <FormInput
              type="text"
              labelText="CPF:"
              labelClass="form-label"
              className="form-control"
              placeholder="___.___.___-__"
            />
          </div>
          <div class="col-md-6">
            <FormInput
              type="text"
              labelText="Avaliação:"
              labelClass="form-label"
              className="form-control"
              placeholder="0 - 10"
            />
          </div>
          <div className="col-12 justify-content-evenly">
            <Button type="submit" style="btn btn-primary" onClick=''>
              Cadastrar
            </Button>
            <Button type="submit" style="btn btn-primary" onClick=''>
              Voltar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
