import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders the label of DatePicker input', () => {
    render(<BookingForm />);

    const datePickerLabel = screen.getByTestId('DatePickerDate__Label');

    expect(datePickerLabel).toHaveTextContent('Choose date');
  });

  test('renders text of submit button', () => {
    render(<BookingForm />);

    const bookingFormSubmitButton = screen.getByTestId('SubmitButton');

    expect(bookingFormSubmitButton).toHaveValue('Submit Reservation');
  });

  test('submits form with correct values from inputs text of submit button', async () => {
    const availableTimes = [
      { value: 18, label: '18:00' },
      { value: 21, label: '21:00' },
    ];
    const spyOnSubmit = jest.fn();
    render(<BookingForm
      onSubmit={spyOnSubmit}
      handleDateChange={jest.fn()}
      availableTimes={availableTimes}
      datePickerInitialValue='2023-08-05'
    />);

    const datePickerInput = screen.getByTestId('DatePickerDate');
    await fireEvent.change(datePickerInput, { target: { value: '2023-08-07' } });

    const timePickerInput = screen.getByTestId('timePickerSelect');
    await fireEvent.change(timePickerInput, { target: { value: 18 } });

    const inputNumberOfGuests = screen.getByTestId('InputNumberOfGuests');
    await fireEvent.change(inputNumberOfGuests, { target: { value: 6 } });

    const selectOccasion = screen.getByTestId('SelectOccasion');
    await fireEvent.change(selectOccasion, { target: { value: 4 } });

    const bookingFormSubmitButton = screen.getByTestId('SubmitButton');
    await fireEvent.click(bookingFormSubmitButton);

    expect(spyOnSubmit).toHaveBeenCalledWith({
      selectedDate: '2023-08-07', selectedTime: '18', numberOfGuests: '6', selectedOccasion: '4',
    });
  });

  test('DatePicker has validation required attribute applied', () => {
    render(<BookingForm />);

    const datePickerInput = screen.getByTestId('DatePickerDate');

    expect(datePickerInput).toHaveAttribute('required');
  });

  test('TimePicker select has validation required attribute applied', () => {
    render(<BookingForm />);

    const timePickerInput = screen.getByTestId('timePickerSelect');

    expect(timePickerInput).toHaveAttribute('required');
  });

  test('inputNumberOfGuests has validation required attribute applied', () => {
    render(<BookingForm />);

    const inputNumberOfGuests = screen.getByTestId('InputNumberOfGuests');

    expect(inputNumberOfGuests).toHaveAttribute('required');
  });

  test('occasion select has validation required attribute applied', () => {
    render(<BookingForm />);

    const selectOccasion = screen.getByTestId('SelectOccasion');

    expect(selectOccasion).toHaveAttribute('required');
  });

  test('inputNumberOfGuests has min attribute applied', () => {
    render(<BookingForm />);

    const inputNumberOfGuests = screen.getByTestId('InputNumberOfGuests');

    expect(inputNumberOfGuests.getAttribute('min')).toEqual('2');
  });
});
