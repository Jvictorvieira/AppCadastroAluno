import Button from "../../componentes/Button/Button";
import FormInput from "../../componentes/Input/Input";
import "./TelaPrincipal.css";

function TelaPrincipal() {
  

  return (
    <div className="container">
      <div>
        <Button style="btn-info" >Novo</Button>
        <Button style="btn-info" >Gráfico</Button>
      </div>
      <div className="card" >
        <div className="card-header bg-primary">Featured</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
}

export default TelaPrincipal;
