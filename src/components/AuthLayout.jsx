import mascote from "../assets/mascote.png";
import logotipo from "../assets/logotipo.png";
import "./AuthLayout.css";

/* Função da autenticação */

function AuthLayout({ titulo, lado = "direito", children }) {
  return (
    <main className={`auth auth--pe-${lado}`}>
      <aside className="auth__visual">
        <img className="auth__mascote" src={mascote} alt="" />
        <img className="auth__logotipo" src={logotipo} alt="Theka" />
      </aside>

      <section className="auth__painel">
        <div className="auth__conteudo">
          <h1 className="auth__titulo">{titulo}</h1>
          {children}
        </div>
      </section>
    </main>
  );
}

export default AuthLayout;