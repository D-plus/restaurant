import React from 'react';
import './Select.css';

function Select({ label, id, options = [], onChange = () => {}, value, dataTestId }) {
  return (
    <div className="select__container">
      <label className="select__select-label" htmlFor={id}>{label}</label>
      <select
        onChange={onChange}
        value={value}
        className="select__select"
        id={id}
        data-testid={dataTestId}
      >
        {options?.map(({ label, value }) => (
          <option
            key={value + label}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
