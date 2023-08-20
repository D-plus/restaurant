import { useEffect, useMemo, useState } from 'react';
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

function BookingForm({ availableTimes = [], handleDateChange, onSubmit, datePickerInitialValue }) {
  const [selectedTime, setSelectedTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState(datePickerInitialValue);
  const [selectedOccasion, setSelectedOccasion] = useState(1);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    onSubmit?.({ selectedDate, selectedTime, numberOfGuests, selectedOccasion });
  };

  useEffect(() => {
    setSelectedTime(availableTimes?.[0]?.value);
  }, [availableTimes]);

  const onDateChange = (value) => {
    handleDateChange(value);
    setSelectedDate(value);
  };

  const isSubmitButtonDisabled = useMemo(() => {
    return !selectedTime || !selectedDate || numberOfGuests < 2 || !selectedOccasion;
  }, [selectedTime, selectedDate, numberOfGuests, selectedOccasion]);

  return (
    <>
      <form className="booking-form" onSubmit={handleSubmitForm}>
        <DatePicker
          label='Choose date'
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          dataTestId='DatePickerDate'
          min={minDate}
          required
        />
        <Select
          id='time'
          label='Choose time'
          options={availableTimes}
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          dataTestId='timePickerSelect'
          required
        />
        <Input
          label='Number of guests'
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
          dataTestId='InputNumberOfGuests'
          min={2}
          required
        />
        <Select
          id='Occasion'
          label='Occasion'
          options={OCCASIONS}
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
          dataTestId='SelectOccasion'
          required
        />
        <Button
          type="submit"
          size="small"
          dataTestId='SubmitButton'
          disabled={isSubmitButtonDisabled}
        >
          Submit Reservation
        </Button>
      </form>
    </>
  );
}

export default BookingForm;
