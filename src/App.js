import { useEffect } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import BookingPage from './pages/BookingPage/BookingPage';
import Home from './pages/Home/Home';
import ConfirmBookingPage from './pages/ConfirmBookingPage/ConfirmBookingPage';

import './App.css';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reserve-table" element={ <BookingPage /> } />
        <Route path="/booking-confirmed" element={ <ConfirmBookingPage /> } />
      </Routes>
    </>
  );
}

export default App;
