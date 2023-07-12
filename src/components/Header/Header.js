import './Header.css';

function Header() {
  return (
    <header className="wrapper">
      <img src="assets/logo.svg" alt="Little lemon logo" />
      <nav>
        <ul className="navigations-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
