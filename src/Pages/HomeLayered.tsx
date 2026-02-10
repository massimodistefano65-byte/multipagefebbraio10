import { useEffect, useState } from "react";
import { ChevronDown, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";
import LayeredCard from "../Components/LayeredCard";

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

function HomeLayered() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsHeroVisible(window.scrollY < 100);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    const el = document.getElementById("cards-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        marginTop: "-72px",       /* offset the .App padding-top so hero is full-screen */
        background: "#020617",
      }}
    >
      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom right, #020617, #7c2d12)",
          }}
        />

        {/* hero content */}
        <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}>
          {/* Name - bottom left */}
          <div style={{ position: "absolute", bottom: 32, left: 48 }}>
            <h1
              className="font-serif text-white uppercase tracking-wider"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1 }}
            >
              Massimo
              <br />
              Di Stefano
            </h1>
          </div>

          {/* Subtitle - bottom right */}
          <div style={{ position: "absolute", bottom: 32, right: 48 }}>
            <p
              className="text-gray-200 uppercase tracking-widest font-light text-right"
              style={{ fontSize: "clamp(12px, 1.5vw, 18px)" }}
            >
              Artista Visuale e Pittore Cosmico
            </p>
          </div>

          {/* Scroll arrow */}
          <button
            onClick={handleArrowClick}
            className={`absolute bottom-8 right-8 text-white hover:text-gray-300 transition-all duration-300 ${
              isHeroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scorri verso le categorie"
          >
            <ChevronDown size={40} className="arrow-bounce" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* ─── STICKY CARDS ─── */}
      <div
        id="cards-section"
        style={{
          background: "#010409",
          perspective: "1200px",
        }}
      >
        {layeredSections.map((s, i) => (
          <LayeredCard
            key={s.id}
            category={s.category}
            gradient={s.gradient}
            link={s.link}
            zIndex={s.zIndex}
            isLast={i === layeredSections.length - 1}
          />
        ))}
      </div>

      {/* ─── CONTACT ─── */}
      <section
        style={{
          position: "relative",
          zIndex: 50,
          width: "100%",
          minHeight: "100vh",
          background: "#020617",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 640, width: "100%", textAlign: "center" }}>
          <h2
            className="font-serif text-white uppercase tracking-wider"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", marginBottom: 48 }}
          >
            Contatti
          </h2>

          <a
            href="mailto:arte@massimodistefano.com"
            className="text-gray-300 hover:text-white transition-colors block"
            style={{ fontSize: "clamp(16px, 2vw, 24px)", marginBottom: 64 }}
          >
            arte@massimodistefano.com
          </a>

          {/* Social */}
          <div className="flex justify-center items-center gap-8" style={{ marginBottom: 64 }}>
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

          <p className="text-xs text-white/40 uppercase tracking-widest">
            &copy; 2026 Massimo Di Stefano &middot; Tutti i diritti riservati
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomeLayered;
