import './DatePicker.css';

function DatePicker({ label, id = 'res-date', onChange = () => {}, value, dataTestId, min, required = false, }) {
  return (
    <div className="date-picker__container">
      <label
        className="date-picker__input-label"
        htmlFor={id}
        data-testid={`${dataTestId}__Label`}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        required={required}
        className="date-picker__input"
        type="date"
        id={id}
        min={min}
        data-testid={dataTestId}
      />
    </div>
  );
}

export default DatePicker;
