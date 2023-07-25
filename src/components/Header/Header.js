import { useMemo, useState } from 'react';

import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavButtonClasses = useMemo(() => isOpen ? 'mobile-nav-burger-button open': 'mobile-nav-burger-button', [isOpen]);
  const mobileNavClasses = useMemo(() => isOpen ? 'mobile-navigations-list-section open': 'mobile-navigations-list-section', [isOpen]);

  return (
    <header className="header__container">
      <section className="header__main-container">
        <img src="assets/logo.svg" className="header__image" alt="Little lemon logo" />
        <nav className="header__nav">
          <ul className="navigations-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <div className={mobileNavButtonClasses} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className={mobileNavClasses}>
        <ul className="mobile-navigations-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
