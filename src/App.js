// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './styles/main.css';
import scrollFunction from './scrips'; // Importa la función de desplazamiento

function App() {
  // Llama a la función de desplazamiento en el evento 'scroll'
  useEffect(() => {
    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null; // Limpia el evento cuando el componente se desmonta
    };
  }, []);

  return (
    <Router>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li id="perfil"><Link to="/profile" className="nav-link">Perfil</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... otras rutas ... */}
      </Routes>
    </Router>
  );
}

export default App;
