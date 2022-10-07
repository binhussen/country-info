/** @format */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Heading from './components/Heading';
import Country from './pages/Country';
import Weather from './pages/Weather';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Heading />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/weather/:country" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
