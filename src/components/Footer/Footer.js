import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="app-footer-wrapper">
      <img src="assets/footer-image.png" alt="View from the restaurant" />
      <nav>
        <div className="footer-navigation-section-wrapper">
          <span className="footer-title">Doormat Navigation</span>
          <ul className="footer-navigations-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reserve-table">Reservations</Link></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/order-online">Order online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-navigation-section-wrapper">
          <span className="footer-title">Contact</span>
          <ul className="footer-navigations-list">
            <li><a href="/">Address</a></li>
            <li><a href="/phone-number">Phone number</a></li>
            <li><a href="/email">Email</a></li>
          </ul>
        </div>

        <div className="footer-navigation-section-wrapper">
          <span className="footer-title">Social Media Links</span>
          <ul className="footer-navigations-list">
            <li><a href="/">Address</a></li>
            <li><a href="/phone-number">Phone number</a></li>
            <li><a href="/email">Email</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
