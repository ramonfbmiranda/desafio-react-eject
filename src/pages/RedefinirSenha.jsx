import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

function RedefinirSenha() {
  const [dados, setDados] = useState({ novaSenha: "", confirmarSenha: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dados);
    navigate("/login");
  }

  return (
    <AuthLayout titulo="Recuperar senha" lado="esquerdo">
      <form className="auth__form" onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="novaSenha"
          value={dados.novaSenha}
          onChange={handleChange}
          placeholder="********"
          autoComplete="new-password"
        />

        <Input
          label="Confirmar nova senha"
          type="password"
          name="confirmarSenha"
          value={dados.confirmarSenha}
          onChange={handleChange}
          placeholder="********"
          autoComplete="new-password"
        />

        <div className="auth__acoes">
          <Button variante="contorno" onClick={() => navigate("/recuperar-senha")}>
            Voltar
          </Button>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default RedefinirSenha;