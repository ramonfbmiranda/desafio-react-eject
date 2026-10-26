import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import RecuperarSenha from "./pages/RecuperarSenha";
import RedefinirSenha from "./pages/RedefinirSenha";
import Cadastro from "./pages/Cadastro";
import Acervo from "./pages/Acervo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/acervo" element={<Acervo />} />
    </Routes>
  );
}

export default App;