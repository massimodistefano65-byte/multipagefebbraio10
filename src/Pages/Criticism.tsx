import React from 'react';

const Criticism = () => {
  return (
    <main>
      <section className="criticism-section">
        <div className="criticism-inner">
          <h2 className="criticism-title">Criticism</h2>
          <p className="criticism-text">
            Una selezione di testi critici, recensioni e approfondimenti sul lavoro di
            Massimo Di Stefano.
          </p>
          <a
            href="/criticism-complete.pdf"
            target="_blank"
            rel="noreferrer"
            className="criticism-button"
          >
            Scarica tutte le critiche (PDF)
          </a>
        </div>
      </section>
    </main>
  );
};

export default Criticism;

