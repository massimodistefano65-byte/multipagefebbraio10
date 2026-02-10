import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-social">
        <a href="https://www.instagram.com/massimodistefano65/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/massimodistefanoarte" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/disty65" target="_blank" rel="noopener noreferrer" aria-label="X Twitter">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://linktr.ee/radmax" target="_blank" rel="noopener noreferrer" aria-label="Linktree" className="linktree-button">
          <i className="fa-solid fa-link"></i>
          <span>Linktree</span>
        </a>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem', color: '#e5e7eb', fontSize: '0.9rem' }}>
        © Massimo Di Stefano. Tutti i diritti riservati.
      </div>
    </footer>
  );
};

export default Footer;
