import { useState } from "react";
import "./Input.css";

function IconeOlho({ aberto }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {aberto ? (
        <>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a19.77 19.77 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A10.9 10.9 0 0 1 12 5c7 0 11 7 11 7a19.86 19.86 0 0 1-3.17 4.19" />
          <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      )}
    </svg>
  );
}

function Input({ label, name, type = "text", ...props }) {
  const [visivel, setVisivel] = useState(false);

  const ehSenha = type === "password";
  const tipoAtual = ehSenha && visivel ? "text" : type;

  return (
    <div className="campo">
      <label htmlFor={name}>{label}</label>

      <div className={`campo__caixa ${ehSenha ? "campo__caixa--com-icone" : ""}`}>
        <input id={name} name={name} type={tipoAtual} {...props} />

        {ehSenha && (
          <button
            type="button"
            className="campo__olho"
            onClick={() => setVisivel(!visivel)}
            aria-label={visivel ? "Ocultar senha" : "Mostrar senha"}
          >
            <IconeOlho aberto={visivel} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;