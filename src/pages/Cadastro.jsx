import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

function Cadastro() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dados);
  }

  return (
    <AuthLayout titulo="Cadastro" lado="esquerdo">
      <form className="auth__form" onSubmit={handleSubmit}>
        <Input
          label="Nome completo"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
          placeholder="Seu nome completo"
          autoComplete="name"
        />

        <Input
          label="E-mail"
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
          placeholder="seuemail@email.com"
          autoComplete="email"
        />

        <Input
          label="Senha"
          type="password"
          name="senha"
          value={dados.senha}
          onChange={handleChange}
          placeholder="********"
          autoComplete="new-password"
        />

        <Input
          label="Confirmar senha"
          type="password"
          name="confirmarSenha"
          value={dados.confirmarSenha}
          onChange={handleChange}
          placeholder="********"
          autoComplete="new-password"
        />

        <div className="auth__acoes">
          <Button variante="contorno" onClick={() => navigate("/login")}>
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Cadastro;