import Button from "../../componentes/Button/Button";
import "./TelaPrincipal.css";
import { useNavigate } from "react-router-dom";

function TelaPrincipal(props) {
  const navigate = useNavigate();
  return (
    <div className="d-flex row justify-content-center m-0">
      <div className="d-flex justify-content-center">
        <Button style="btn btn-info m-1" onClick={() => navigate("/Cadastro")}>
          Novo
        </Button>
        <Button style="btn btn-info m-1">Gráfico</Button>
      </div>
      <div className="col-sm-6 ">
        <div className="card p-0 m-1">
          <div className="card-header bg-primary text-white fw-bold">Alunos</div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item d-flex justify-content-between">
            <p className="fw-bold">Matrícula</p>
              <p className="fw-bold">Aluno</p>
              <p className="fw-bold">CPF</p>
              <p className="fw-bold">Avaliação</p>
              <p className="fw-bold">Ações</p>
            </li>
            {
            props.lista.map((aluno, index) =>
              <li key={index} className="list-group-item d-flex justify-content-between">
                <p className="fw-bold">{aluno.matricula}</p>
                <p className="fw-bold">{aluno.nome}</p>
                <p className="fw-bold">{aluno.cpf}</p>
                <p className="fw-bold">{aluno.avaliacao}</p>
                <div className=""><Button style="btn btn-warning">Alterar</Button><Button style="btn btn-danger">Remover</Button></div>
              </li>
            )}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default TelaPrincipal;
