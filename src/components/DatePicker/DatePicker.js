import './DatePicker.css';

function DatePicker({ label, onChange = () => {}, value, dataTestId, min }) {
  return (
    <div className="date-picker__container">
      <label
        className="date-picker__input-label"
        htmlFor="res-date"
        data-testid={`${dataTestId}__Label`}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="date-picker__input"
        type="date"
        id="res-date"
        min={min}
        data-testid={dataTestId}
      />
    </div>
  );
}

export default DatePicker;
