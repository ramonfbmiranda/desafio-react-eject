import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import mascote from "../assets/mascote.png";
import logotipo from "../assets/logotipo.png";
import "./Login.css";

function Login() {
  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dados);
  }

  return (
    <main className="login">
      <aside className="login__visual">
        <img className="login__mascote" src={mascote} alt="" />
        <img className="login__logotipo" src={logotipo} alt="Theka" />
      </aside>

      <section className="login__painel">
        <div className="login__conteudo">
          <h1 className="login__titulo">Login</h1>

          <form className="login__form" onSubmit={handleSubmit}>
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

            <div className="login__links">
              <a href="/recuperar-senha">Esqueceu a senha?</a>
              <a href="/cadastro">Ainda não tem cadastro?</a>
            </div>

            <div className="login__acoes">
              <Button type="submit">Entrar</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;