import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const [dados, setDados] = useState({ email: "", senha: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dados);
  }

  return (
    <AuthLayout titulo="Login" lado="direito">
      <form className="auth__form" onSubmit={handleSubmit}>
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
          autoComplete="current-password"
        />

        <div className="auth__links">
          <Link to="/recuperar-senha">Esqueceu a senha?</Link>
          <Link to="/cadastro">Ainda não tem cadastro?</Link>
        </div>

        <div className="auth__acoes">
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;