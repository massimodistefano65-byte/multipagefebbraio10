import React from 'react';

const Contact = () => {
  return (
    <main>
      <section className="contact-full">
        <div className="contact-card">
          <h2>Contatti</h2>
          <p>Per informazioni su opere, progetti e collaborazioni:</p>

          <div className="contact-info">
            <p>
              Email:{' '}
              <a href="mailto:arte@massimodistefano.com">
                arte@massimodistefano.com
              </a>
            </p>
            <p>
              Telefono:{' '}
              <a href="tel:+393473044215">
                +39 347 304 4215
              </a>
            </p>
          </div>

          <div className="contact-social">
            <span>Seguimi anche qui:</span>
            <div className="contact-social-icons">
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
          </div>

          <p className="contact-note">
            © Massimo Di Stefano. Tutti i diritti riservati.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;

