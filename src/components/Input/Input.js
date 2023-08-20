import './Input.css';

function Input({
  label,
  type = 'number',
  min = 1,
  max = 10,
  onChange = () => {},
  value,
  dataTestId,
  id = 'input_id',
  required = false,
}) {
  return (
    <div className="input__container">
      <label className="input__label" htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        required={required}
        className="input__element"
        type={type}
        placeholder={`Select at least ${min} guests`}
        min={min}
        max={max}
        id={id}
        data-testid={dataTestId}
      />
    </div>
  );
}

export default Input;
