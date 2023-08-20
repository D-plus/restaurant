import React, { useMemo } from 'react';
import './Button.css';

function Button({
  children,
  type = 'button',
  onClick = () => {},
  size = "large",
  disabled = false,
  dataTestId,
  areaLabel = 'Navigation button',
}) {
  const buttonClasses = useMemo(() => {
    return `button__primary button__${size} ${type}`
  }, [size, type]);

  return (
    <>
      {type === 'submit' ? (
        <input
          className={buttonClasses}
          type="submit"
          value={children}
          data-testid={dataTestId}
          aria-label="Submit"
        />
      ) : (
        <button
          className={buttonClasses}
          type={type}
          data-testid={dataTestId}
          disabled={disabled}
          aria-label={areaLabel}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
