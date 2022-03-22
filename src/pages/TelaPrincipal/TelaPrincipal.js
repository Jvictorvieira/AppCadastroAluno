import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import "./TelaPrincipal.css";

function TelaPrincipal() {
  return (
    <div className="container">
      <div>
        <Button style="btn-info">Novo</Button>
        <Button style="btn-info">Gráfico</Button>
      </div>
      <div class="card" >
        <div class="card-header bg-primary">Featured</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
}

export default TelaPrincipal;
