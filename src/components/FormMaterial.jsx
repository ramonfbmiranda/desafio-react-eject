import { useNavigate } from "react-router-dom";
import Rodape from "./Rodape";
import "./FormMaterial.css";

function Icone({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const Marcador = () => <Icone><path d="M6 3h12v18l-6-4-6 4z" /></Icone>;
const Lixeira = () => <Icone><path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 11v6M14 11v6" /></Icone>;
const Seta = () => <Icone><path d="M6 9l6 6 6-6" /></Icone>;

function Campo({ label, name, className = "", children }) {
  return (
    <div className={`material__campo ${className}`}>
      <label htmlFor={name}>{label}</label>
      {children}
    </div>
  );
}

function FormMaterial({ modo = "adicionar" }) {
  const navigate = useNavigate();
  const editando = modo === "editar";

  return (
    <div className="material">
      <header className="material__header">
        <span className="material__folha" aria-hidden="true" />
        <div className="material__marca">Theka</div>
      </header>

      <main className="material__main">
        <h1 className="material__titulo">
          {editando ? "Editar material" : "Adicionar material ao catálogo"}
        </h1>

        {editando ? (
          <div className="material__capa material__capa--preenchida" role="img" aria-label="Capa de A cabeça do santo" />
        ) : (
          <div className="material__capa">
            <Icone><rect x="3" y="5" width="16" height="14" rx="2" /><path d="M7 3h14v14M3 15l5-5 5 5 3-3" /></Icone>
            <button type="button" className="material__upload">
              Adicionar capa
              <Icone><path d="M12 15V3M8 7l4-4 4 4M5 12v8h14v-8" /></Icone>
            </button>
          </div>
        )}

        <form className="material__form" onSubmit={(e) => e.preventDefault()}>
          <Campo label="Título no material:" name="titulo">
            <input id="titulo" placeholder="Inserir o título do material" defaultValue={editando ? "A cabeça do santo" : ""} />
          </Campo>

          <div className="material__linha">
            <Campo label="Número de páginas" name="paginas">
              <input id="paginas" placeholder="000" defaultValue={editando ? "176" : ""} />
            </Campo>
            <Campo label="ISBM" name="isbn">
              <input id="isbn" placeholder="xxxxxxx" defaultValue={editando ? "123456789" : ""} />
            </Campo>
          </div>

          <Campo label="Autor:" name="autor">
            <input id="autor" placeholder="Machado de Assis" defaultValue={editando ? "Socorro Acioli" : ""} />
          </Campo>

          <div className="material__linha">
            <Campo label="Ano de publicação" name="ano">
              <input id="ano" placeholder="000" defaultValue={editando ? "2016" : ""} />
            </Campo>
            <Campo label="Editora" name="editora">
              <div className="material__select">
                <select id="editora" defaultValue={editando ? "companhia" : ""}>
                  <option value="" disabled>Selecionar</option>
                  <option value="companhia">Companhia das Letras</option>
                </select>
                <Seta />
              </div>
            </Campo>
          </div>

          <Campo label="Resumo do material:" name="resumo">
            <textarea
              id="resumo"
              rows="4"
              placeholder="Inserir um breve resumo do material."
              defaultValue={editando ? "Um jovem que viaja para a cidade de Candeia para cumprir um pedido de sua mãe moribunda: encontrar o pai desconhecido." : ""}
            />
          </Campo>

          {editando ? (
            <>
              <div className="material__acoes material__acoes--entre">
                <button type="button" className="material__botao">Deletar <Lixeira /></button>
                <button type="submit" className="material__botao">Salvar <Marcador /></button>
              </div>
              <button type="button" className="material__botao material__botao--contorno material__botao--largo" onClick={() => navigate("/acervo")}>
                Cancelar
              </button>
            </>
          ) : (
            <div className="material__acoes">
              <button type="button" className="material__botao material__botao--contorno" onClick={() => navigate("/acervo")}>
                Cancelar
              </button>
              <button type="submit" className="material__botao">Salvar <Marcador /></button>
            </div>
          )}
        </form>
      </main>

      <Rodape />
    </div>
  );
}

export default FormMaterial;