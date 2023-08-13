import './Button.css';
import { useMemo } from 'react';

function Button({ children, type = 'button', onClick = () => {}, size = "large", dataTestId }) {
  const buttonClasses = useMemo(() => {
    return `button__primary button__${size}`
  }, [size]);

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

export default Button;
