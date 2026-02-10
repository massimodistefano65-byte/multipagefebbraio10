import { useEffect, useState } from "react";
import {
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  ExternalLink,
} from "lucide-react";
import LayeredCard from "../Components/LayeredCard";

const HomeLayered = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeroVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    const cardsSection = document.querySelector(".cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const layeredSections = [
    {
      id: 1,
      category: "PITTURA",
      gradient: "from-red-900 via-red-700 to-orange-600",
      link: "/painting",
      zIndex: 10,
    },
    {
      id: 2,
      category: "DIGITAL ART",
      gradient: "from-purple-900 via-indigo-700 to-blue-600",
      link: "/digital-art",
      zIndex: 20,
    },
    {
      id: 3,
      category: "FOTOGRAFIA",
      gradient: "from-blue-900 via-cyan-700 to-teal-600",
      link: "/photography",
      zIndex: 30,
    },
    {
      id: 4,
      category: "T-SHIRT",
      gradient: "from-pink-900 via-rose-700 to-red-600",
      link: "/tshirts",
      zIndex: 40,
    },
  ];

  return (
    <div
      style={{
        background: "#020617",
        marginTop: "-72px",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #020617, #7c2d12)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ position: "absolute", bottom: "2rem", left: "3rem", zIndex: 20 }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                fontFamily: "serif",
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                lineHeight: 1.1,
              }}
            >
              Massimo
              <br />
              Di Stefano
            </h1>
          </div>

          <div style={{ position: "absolute", bottom: "2rem", right: "3rem", zIndex: 20 }}>
            <p
              style={{
                fontSize: "clamp(0.75rem, 1.5vw, 1.125rem)",
                color: "#e5e7eb",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 300,
                textAlign: "right",
              }}
            >
              Artista Visuale e Pittore Cosmico
            </p>
          </div>

          <button
            onClick={handleArrowClick}
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              opacity: isHeroVisible ? 1 : 0,
              pointerEvents: isHeroVisible ? "auto" : "none",
            }}
            aria-label="Scorri giù"
          >
            <ChevronDown size={40} className="arrow-bounce" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* LAYERED CARDS SECTION */}
      <div
        className="cards-section"
        style={{ position: "relative" }}
      >
        {layeredSections.map((section) => (
          <LayeredCard
            key={section.id}
            category={section.category}
            gradient={section.gradient}
            link={section.link}
            zIndex={section.zIndex}
          />
        ))}
      </div>

      {/* CONTACT SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          background: "#020617",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 1.5rem",
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: "42rem", width: "100%", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontFamily: "serif",
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "3rem",
            }}
          >
            Contatti
          </h2>

          <a
            href="mailto:arte@massimodistefano.com"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              color: "#d1d5db",
              textDecoration: "none",
              display: "block",
              marginBottom: "4rem",
            }}
          >
            arte@massimodistefano.com
          </a>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            <a
              href="https://www.instagram.com/massimodistefano65/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={40} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/massimodistefanoarte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={40} strokeWidth={1.5} />
            </a>
            <a
              href="https://twitter.com/disty65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="X Twitter"
            >
              <Twitter size={40} strokeWidth={1.5} />
            </a>
            <a
              href="https://linktr.ee/radmax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Linktree"
            >
              <ExternalLink size={40} strokeWidth={1.5} />
            </a>
          </div>

          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            &copy; 2026 Massimo Di Stefano &middot; Tutti i diritti riservati
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeLayered;
