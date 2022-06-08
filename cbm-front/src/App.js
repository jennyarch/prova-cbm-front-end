import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DadosPessoais from './Pages/DadosPessoais/DadosPessoais';
import Experiencia from './Pages/Experiencia/Experiencia';
import Main from './Pages/Main/Main';
import Resumo from './Pages/Resumo/Resumo';
import CadastradoSucesso from './Pages/Cadastrado/CadastradoSucesso';
import Perfil from './Pages/Perfil/Perfil';
import ListaCandidatos from './Pages/Candidatos/ListaCandidatos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/formulario" element={<DadosPessoais />}/>
        <Route path="/experiencia" element={<Experiencia />}/>
        <Route path="/resumo" element={<Resumo />}/>
        <Route path="/cadastrado" element={<CadastradoSucesso />}/>
        <Route path="/perfil/:id" element={<Perfil />}/>
        <Route path="/candidatos" element={<ListaCandidatos />}/>
      </Routes>
    </Router>
  );
}

export default App;