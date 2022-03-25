import TelaPrincipal from "../../pages/TelaPrincipal/TelaPrincipal";
import Cadastro from "../../pages/Cadastro/Cadastro";
import Alterar from "../../pages/Alterar/Alterar";
import Remover from "../../pages/Remover/Remover";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function Rota() {
  const [listaAlunos, setLista] = useState([
    {
      matricula: 1,
      nome: "Ravena",
      cpf: "00000000000",
      avaliacao: 10,
    },
    {
      matricula: 2,
      nome: "Vitória",
      cpf: "12345678900",
      avaliacao: 10,
    },
    {
      matricula: 3,
      nome: "Victor",
      cpf: "12345678911",
      avaliacao: 10,
    },
    {
      matricula: 4,
      nome: "Garfield",
      cpf: "12345678922",
      avaliacao: 10,
    },
  ]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TelaPrincipal setLista={setLista} listaAlunos={listaAlunos} />
          }
        />
        <Route
          path="/Cadastro"
          element={<Cadastro setLista={setLista} listaAlunos={listaAlunos} />}
        />
        <Route
          path="/Alterar" element={<Alterar setLista={setLista} listaAlunos={listaAlunos}/>}
        />
        <Route
          path="/Remover" element={<Remover setLista={setLista} listaAlunos={listaAlunos}/>}
        />
        </Routes>
        
    </Router>
  );
}

export default Rota;
