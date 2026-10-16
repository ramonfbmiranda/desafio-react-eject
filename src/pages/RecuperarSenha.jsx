import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    navigate("/redefinir-senha");
  }

  return (
    <AuthLayout titulo="Recuperar senha" lado="esquerdo">
      <form className="auth__form" onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seuemail@email.com"
          autoComplete="email"
        />

        <div className="auth__acoes">
          <Button variante="contorno" onClick={() => navigate("/login")}>
            Voltar
          </Button>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default RecuperarSenha;