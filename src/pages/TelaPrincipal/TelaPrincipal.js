import Button from "../../componentes/Button/Button";
import "./TelaPrincipal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Chart, registerables } from "chart.js";

function TelaPrincipal(props) {
  Chart.register(...registerables);
  function datas() {
    let lista = [];
    for (var i in props.listaAlunos) {
      lista.push(Number.parseInt(props.listaAlunos[i].avaliacao));
    }

    return lista;
  }
  function labels() {
    let lista = [];
    for (var i in props.listaAlunos) {
      lista.push(props.listaAlunos[i].nome);
    }
    console.log(lista);
    return lista;
  }
  const [grafico, setgrafico] = useState({
    labels: labels(),
    data: datas(),
  });
  const data = {
    labels: grafico.labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: grafico.data,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {},
  };
  const navigate = useNavigate();
  return (
    <div className="d-flex row justify-content-center m-0">
      <div className="d-flex justify-content-center">
        <Button style="btn btn-info m-1" onClick={() => navigate("/Cadastro")}>
          Novo
        </Button>
        <Button
          style="btn btn-info m-1"
          onClick={() => {
            const myChart = new Chart(
              document.getElementById("myChart"),
              config
            );
          }}
        >
          Gráfico
        </Button>
      </div>
      <div className="col-sm-6 ">
        <div className="card p-0 m-1">
          <div className="card-header bg-primary text-white fw-bold">
            Alunos
          </div>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item d-flex justify-content-between">
              <p className="fw-bold">Matrícula</p>
              <p className="fw-bold">Aluno</p>
              <p className="fw-bold">CPF</p>
              <p className="fw-bold">Avaliação</p>
              <p className="fw-bold">Ações</p>
            </li>
            {props.listaAlunos.map((aluno, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <p className="fw-bold">{aluno.matricula}</p>
                <p className="fw-bold">{aluno.nome}</p>
                <p className="fw-bold">{aluno.cpf}</p>
                <p className="fw-bold">{aluno.avaliacao}</p>
                <div className="">
                  <Button style="btn btn-warning">Alterar</Button>
                  <Button style="btn btn-danger">Remover</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-sm-6">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default TelaPrincipal;
