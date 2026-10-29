import { Link } from "react-router-dom";
import "./Acervo.css";
import { useEffect, useState } from "react";
import { listarLivros } from "../services/api";
import { urlCapa } from "../services/isbn";

/* SEÇÃO DE LIVROS INICIAIS (NÃO ESTÁ SENDO USADA MAIS, DEVIDO AO CONSUMO DE API, PODE SER ÚTIL PARA TESTES) 
  const livros = [
  { titulo: "A cabeça do santo", cor: "#f7d417" },
  { titulo: "Oração para desaparecer", cor: "#7fbde6" },
  { titulo: "A biblioteca da meia-noite", cor: "#2f7a3d" },
  { titulo: "Nunca vi a chuva", cor: "#e0a52b" },
  { titulo: "Canção para ninar menino grande", cor: "#b8793f" },
  { titulo: "Três", cor: "#e8a0b4" },
  { titulo: "O avesso da pele", cor: "#8fb0c9" },
  { titulo: "Garota, mulher, outras", cor: "#4a4a4a" },
  { titulo: "Flores", cor: "#d97a7a" },
  { titulo: "Amor(es) verdadeiro(s)", cor: "#6aa59a" },
  { titulo: "Daisy Jones & The Six", cor: "#2a1a2e" },
  { titulo: "Torto arado", cor: "#f2b8a2" },
  { titulo: "O conto da aia", cor: "#d9d9d9" },
  { titulo: "Os dias de verão", cor: "#12a37f" },
  { titulo: "Viola Davis", cor: "#c9c9c9" },
];

const destaques = livros.slice(0, 5);
*/
function IconeUsuario() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function Acervo() {
const [livros, setLivros] = useState([]);
const [erro, setErro] = useState("");

useEffect(() => {
  let cancelado = false;
  listarLivros()
    .then((dados) => !cancelado && setLivros(dados))
    .catch((e) => !cancelado && setErro(e.message));
  return () => {
    cancelado = true;
  };
}, []);

const destaques = livros.slice(0, 5);
  return (
    <div className="acervo">
      {/* Cabeçalho */}
      <header className="acervo__header">
        <span className="acervo__logo-circulo" aria-hidden="true" />
        <nav className="acervo__nav">
          <Link to="/acervo">Acervo</Link>
          <Link to="/sobre">Sobre nós</Link>
        </nav>
        <button type="button" className="acervo__usuario" aria-label="Perfil">
          <IconeUsuario />
        </button>
      </header>

      {/* Novidades */}
      <section className="acervo__hero">
        <div className="acervo__hero-texto">
          <h1>Novidades da semana</h1>
          <p className="acervo__hero-livro">A cabeça do santo</p>
          <p className="acervo__hero-autor">Socorro Acioli - 2014</p>
        </div>

        <div className="acervo__carrossel">
          {destaques.map((livro, i) => (
            <div
            key={livro.id}
            className={`acervo__destaque ${i === 0 ? "acervo__destaque--ativo" : ""}`}>
            {urlCapa(livro) && (
            <img src={urlCapa(livro)} alt={livro.titulo}
            onError={(e) => (e.currentTarget.style.display = "none")}
            />
            )}
            </div>
          ))}
        </div>
      </section>

      {/* Catálogo */}
      <section className="acervo__catalogo">
        <h2>Veja nosso catálogo</h2>

        <form className="acervo__busca" onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="Fazer busca" aria-label="Fazer busca" />
          <select aria-label="Gênero" defaultValue="">
            <option value="" disabled>Gênero</option>
          </select>
          <select aria-label="Ordenar" defaultValue="">
            <option value="" disabled>Ordem</option>
          </select>
          <button type="submit">Buscar</button>
        </form>

{erro && <p role="alert">{erro}</p>}

        <ul className="acervo__grade">
          {livros.map((livro) => (
          <li key={livro.id}>
          <div className="acervo__capa">
            {urlCapa(livro) && (
              <img
                src={urlCapa(livro)}
                alt={livro.titulo}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
          </div>
          </li>
          ))}
        </ul>

        <nav className="acervo__paginacao" aria-label="Paginação">
          <button type="button" className="acervo__seta" aria-label="Página anterior">‹</button>
          <button type="button">1</button>
          <button type="button" className="acervo__pagina--ativa" aria-current="page">2</button>
          <button type="button">3</button>
          <button type="button" className="acervo__seta" aria-label="Próxima página">›</button>
        </nav>
      </section>

      {/* Rodapé */}
      <footer className="acervo__footer">
        <div className="acervo__footer-marca">
          <strong>Theka</strong>
          <span>Biblioteca</span>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li>(84) 9 9999-2222</li>
            <li>www.theka.com.br</li>
            <li>Natal, RN</li>
          </ul>
        </div>

        <div>
          <h3>Redes sociais</h3>
          <ul>
            <li>@theka.biblioteca</li>
            <li>@theka.biblioteca</li>
            <li>@theka.biblioteca</li>
          </ul>
        </div>

        <div>
          <h3>Ajuda</h3>
          <ul>
            <li>Central de ajuda</li>
            <li>FAQ</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Acervo;