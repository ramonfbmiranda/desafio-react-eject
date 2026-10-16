import "./Button.css";

function Button({ children, type = "button", variante = "primario", ...props }) {
  return (
    <button className={`botao botao--${variante}`} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;