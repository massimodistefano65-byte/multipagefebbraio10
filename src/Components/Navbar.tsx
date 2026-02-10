import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand mobile-only">
          <Link to="/">
            MD
          </Link>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>

        <ul className={`navbar-links ${isOpen ? "is-open" : ""}`}>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className={isActive("/bio") ? "active" : ""}>
            <Link to="/bio" onClick={toggleMenu}>Bio</Link>
          </li>
          <li className={isActive("/criticism") ? "active" : ""}>
            <Link to="/criticism" onClick={toggleMenu}>Criticism</Link>
          </li>
          <li className={isActive("/painting") ? "active" : ""}>
            <Link to="/painting" onClick={toggleMenu}>Painting</Link>
          </li>
          <li className={isActive("/digital-art") ? "active" : ""}>
            <Link to="/digital-art" onClick={toggleMenu}>Digital Art</Link>
          </li>
          <li className={isActive("/photography") ? "active" : ""}>
            <Link to="/photography" onClick={toggleMenu}>Fotografia</Link>
          </li>
          <li className={isActive("/tshirts") ? "active" : ""}>
            <Link to="/tshirts" onClick={toggleMenu}>T‑Shirt</Link>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
