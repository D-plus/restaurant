import { useState } from 'react';
import Button from '../../components/Button/Button';
import DatePicker from '../../components/DatePicker/DatePicker';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';

import './BookingForm.css';

const OCCASIONS = [
  { value: 1, label: 'Birthday' },
  { value: 2, label: 'Anniversary' },
  { value: 3, label: 'Engagement' },
  { value: 4, label: 'Other' },
];

const minDate = new Date().toISOString().split('T')[0];

function BookingForm({ availableTimes, handleDateChange, onSubmit, datePickerInitialValue }) {
  const [selectedTime, setSelectedTime] = useState(availableTimes?.[0]?.value);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState(datePickerInitialValue);
  const [selectedOccasion, setSelectedOccasion] = useState(1);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    onSubmit?.({ selectedDate, selectedTime, numberOfGuests, selectedOccasion });
  };

  const onDateChange = (value) => {
    handleDateChange(value);
    setSelectedDate(value);
  };

  return (
    <>
      <form className="booking-form">
        <DatePicker
          label='Choose date'
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          dataTestId='DatePickerDate'
          min={minDate}
        />
        <Select
          id='time'
          label='Choose time'
          options={availableTimes}
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          dataTestId='timePickerSelect'
        />
        <Input
          label='Number of guests'
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
          dataTestId='InputNumberOfGuests'
        />
        <Select
          id='Occasion'
          label='Occasion'
          options={OCCASIONS}
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
          dataTestId='SelectOccasion'
        />
        <Button
          type="submit"
          onClick={handleSubmitForm}
          size="small"
          dataTestId='SubmitButton'
        >
          Submit Reservation
        </Button>
      </form>
    </>
  );
}

export default BookingForm;
