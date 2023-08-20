import { useReducer, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { submitAPI } from '../../helpers/data';

import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import BookingForm from '../../components/BookingForm/BookingForm';
import Button from '../../components/Button/Button';
import './BookingPage.css';
import { fetchData, initializeTimes } from '../../helpers/api-handlers';

const DATE_PICKER_INITIAL_VALUE = new Date().toISOString().split('T')[0];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "DATE_CHANGE": {
      return action.times;
    }

    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes(dispatch);
  }, []);

  const handleDateChange = async (date) => {
    fetchData(date, dispatch);
  };

  const handleFormSubmit = useCallback(async (data) => {
    const responseJSON = await submitAPI(data);

    if (JSON.parse(responseJSON)) {
      navigate('/booking-confirmed');
    }
  }, [navigate]);

  return (
    <>
      <Hero
        title="Reserve a Table"
        hideCallToAction
      />
      <main className="booking-page__container">
        <section className="booking-page__header">
          <h2>Reservation Configuration</h2>
          <Button>Online Menu</Button>
        </section>

        <BookingForm
          availableTimes={availableTimes}
          handleDateChange={handleDateChange}
          datePickerInitialValue={DATE_PICKER_INITIAL_VALUE}
          onSubmit={handleFormSubmit}
        />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
