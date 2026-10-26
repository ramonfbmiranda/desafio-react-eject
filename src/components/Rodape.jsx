import "./Rodape.css";

function Icone({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__marca">
        <strong>Theka</strong>
        <span>Aventuras literárias</span>
      </div>

      <div className="rodape__colunas">
        <section>
          <h2>Contato</h2>
          <ul>
            <li><Icone><rect x="7" y="2" width="10" height="20" rx="2" /></Icone>(84) 9 9999-2222</li>
            <li><Icone><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></Icone>www.theka.com.br</li>
            <li><Icone><path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></Icone>Natal, RN</li>
          </ul>
        </section>

        <section>
          <h2>Redes sociais</h2>
          <ul>
            <li><Icone><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></Icone>@theka.biblioteca</li>
            <li><Icone><path d="M14 3v11a4 4 0 1 1-4-4" /><path d="M14 3c0 3 2 5 5 5" /></Icone>@theka.biblioteca</li>
            <li><Icone><path d="M4 4l16 16M20 4L4 20" /></Icone>@theka.biblioteca</li>
          </ul>
        </section>

        <section>
          <h2>Ajuda</h2>
          <ul>
            <li><Icone><circle cx="12" cy="12" r="10" /><path d="M12 11v6M12 7.5v.5" /></Icone>Central de ajuda</li>
            <li><Icone><circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17v.5" /></Icone>FAQ</li>
          </ul>
        </section>
      </div>

      <p className="rodape__credito">Mockup desenvolvido por EJECT</p>
    </footer>
  );
}

export default Rodape;