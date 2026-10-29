import "./Rodape.css";

// Caso seu arquivo Rodape.jsx esteja em src/components, o caminho de importação começa com "../assets/..."
import iconeTelefone from "../assets/iconesRodape/Telefone.png";
import iconeEndereco from "../assets/iconesRodape/Endereco.png";
import iconeLocal from "../assets/iconesRodape/Local.png";
import iconeInstagram from "../assets/iconesRodape/Simbolo Instagram.png";
import iconeTikTok from "../assets/iconesRodape/Simbolo TikTok.png";
import iconeX from "../assets/iconesRodape/Simbolo X.png";
import iconeCentralAjuda from "../assets/iconesRodape/Central de Ajuda.png";
import iconeFAQ from "../assets/iconesRodape/FAQ.png";
import logoRosa from "../assets/logotipoRosa.png";

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__principal">
        
        <div className="rodape__marca">
          <img src={logoRosa} alt="Logotipo Theka" />
          <span>Aventuras literárias</span>
        </div>

        <div className="rodape__colunas">
          <section>
            <h2>Contato</h2>
            <ul>
              <li><img src={iconeTelefone} alt="Telefone" width="18" height="18" />(84) 9 9999-2222</li>
              <li><img src={iconeEndereco} alt="Endereço" width="18" height="18" />www.theka.com.br</li>
              <li><img src={iconeLocal} alt="Local" width="18" height="18" />Natal, RN</li>
            </ul>
          </section>

          <section>
            <h2>Redes sociais</h2>
            <ul>
              <li><img src={iconeInstagram} alt="Instagram" width="18" height="18" />@theka.biblioteca</li>
              <li><img src={iconeTikTok} alt="TikTok" width="18" height="18" />@theka.biblioteca</li>
              <li><img src={iconeX} alt="X" width="18" height="18" />@theka.biblioteca</li>
            </ul>
          </section>

          <section>
            <h2>Ajuda</h2>
            <ul>
              <li><img src={iconeCentralAjuda} alt="Central de Ajuda" width="18" height="18" />Central de ajuda</li>
              <li><img src={iconeFAQ} alt="FAQ" width="18" height="18" />FAQ</li>
            </ul>
          </section>
        </div>
      </div>

      <p className="rodape__credito">Mockup desenvolvido por EJECT</p>
    </footer>
  );
}

export default Rodape;