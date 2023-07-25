import './Button.css';

function Button({ children }) {
  return (
    <button className="button__primary">{children}</button>
  );
}

export default Button;
