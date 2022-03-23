import Button from "../../componentes/Button/Button";
import "./TelaPrincipal.css";
import {useNavigate } from 'react-router-dom';
function TelaPrincipal() {
  const navigate = useNavigate();
  
  return (
    <div className="d-flex row justify-content-center">
      <div className="">
        <Button style="btn-info" onClick={() =>navigate("/Cadastro")} >Novo</Button>
        <Button style="btn-info" >Gráfico</Button>
      </div>
      <div className="card col-6 p-0" >
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
