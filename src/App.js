import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import ReserveTable from './pages/ReserveTable/ReserveTable';
import Home from './pages/Home/Home';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reserve-table" element={ <ReserveTable /> } />
      </Routes>
    </>
  );
}

export default App;
