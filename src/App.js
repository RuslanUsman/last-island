import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Основной контент приложения */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        {/* Футер, который отображается всегда */}
        <footer>
        <p>Эпоха выживания</p>
          <a href="https://t.me/eraSurvival" className="footer-button">В Telegram</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
