import "./Button.css";

function Button({ children, type = "button", ...props }) {
  return (
    <button className="botao" type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;