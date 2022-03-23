import TelaPrincipal from '../../pages/TelaPrincipal/TelaPrincipal';
import Cadastro from '../../pages/Cadastro/Cadastro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 
function Rota() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TelaPrincipal/>} />
        <Route path='/Cadastro' element={<Cadastro/>} />
      </Routes>
    </Router>
  );
}
 
export default Rota;