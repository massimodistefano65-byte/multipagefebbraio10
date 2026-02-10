import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* HERO IDENTICO MONOPAGINA */}
      <section className="hero">
        <div>
          <h1>Massimo Di Stefano</h1>
          <p>Artista Visuale e Pittore Cosmico</p>
        </div>
      </section>

      {/* SEZIONI SCROLL SEMPLICI */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bio</h2>
        <Link to="/bio" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Scopri di più
        </Link>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Criticism</h2>
        <Link to="/criticism" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Leggi critiche
        </Link>
      </section>

      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Painting</h2>
        <Link to="/painting" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Vedi opere
        </Link>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Digital Art</h2>
        <Link to="/digital-art" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Vedi opere
        </Link>
      </section>

      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Fotografia</h2>
        <Link to="/photography" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Vedi foto
        </Link>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>T‑Shirt</h2>
        <Link to="/tshirts" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Vedi maglie
        </Link>
      </section>

      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contatti</h2>
        <Link to="/contact" style={{ padding: '1rem 2rem', border: '1px solid', borderRadius: '999px', textDecoration: 'none' }}>
          Contattami
        </Link>
      </section>
    </main>
  );
};

export default Home;
