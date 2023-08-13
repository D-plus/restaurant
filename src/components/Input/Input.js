import './Input.css';

function Input({ label, type = 'number', min = '1', max = '10', onChange = () => {}, value, dataTestId }) {
  return (
    <div className="input__container">
      <label className="input__label" htmlFor="input_id">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="input__element"
        type={type} placeholder="1"
        min={min}
        max={max}
        id="input_id"
        data-testid={dataTestId}
      />
    </div>
  );
}

export default Input;
