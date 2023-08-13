import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ConfirmBookingPage.css';

function ConfirmBookingPage() {
  return (
    <section className="confirm-booking-page__container">
      <section className="confirm-booking-page__info-container">
        <img src="assets/icons/check.svg" className="confirm-booking-page__successful-check" alt="Check icon"/>
        <span>Your booking successfully confirmed!</span>
      </section>

      <section className="confirm-booking-page__actions-container">
        <Link to="/">
          <Button size="small">Home</Button>
        </Link>
      </section>
    </section>
  );
}

export default ConfirmBookingPage;
