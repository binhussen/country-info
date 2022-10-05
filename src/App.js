/** @format */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import Header from './components/Header';
import Country from './pages/Country';
import Weather from './pages/Weather';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Filter />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/weather/:country" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
