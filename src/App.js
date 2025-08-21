import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/Homepg';
import ClgSec from './pages/ClgSec/ClgSec';
import AbhyudayaPage from './pages/Abhyudaya/Abyudaya';
import MagazinePage from './pages/Magazine';
import About from './pages/About/Index';
import CDPPage from './pages/CDP'; // Add CDP import

const App = () => {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/clgsec" element={<ClgSec />} />
          <Route path="/abhyudaya" element={<AbhyudayaPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cdp" element={<CDPPage />} /> {/* Add CDP route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;