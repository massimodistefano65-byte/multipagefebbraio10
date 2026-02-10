import { useEffect, useState } from "react";
import { ChevronDown, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";
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
    <div className="bg-slate-950" style={{ marginTop: "-72px" }}>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] to-[#7c2d12]" />

        <div className="relative z-10 w-full h-full flex flex-col">
          <div className="absolute bottom-8 left-12 z-20">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-wider leading-tight"
              style={{ fontSize: "60px" }}
            >
              Massimo
              <br />
              Di Stefano
            </h1>
          </div>

          <div className="absolute bottom-8 right-12 z-20">
            <p className="text-base md:text-lg text-gray-200 uppercase tracking-widest font-light text-right">
              Artista Visuale e Pittore Cosmico
            </p>
          </div>

          <button
            onClick={handleArrowClick}
            className={`absolute bottom-8 right-8 text-white hover:text-gray-300 transition-all duration-300 ${
              isHeroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scorri giù"
          >
            <ChevronDown size={40} className="arrow-bounce" strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* LAYERED CARDS SECTION */}
      <section className="cards-section relative">
        {layeredSections.map((section) => (
          <LayeredCard
            key={section.id}
            category={section.category}
            gradient={section.gradient}
            link={section.link}
            zIndex={section.zIndex}
          />
        ))}
      </section>

      {/* CONTACT SECTION */}
      <section
        className="relative w-full min-h-screen bg-slate-950 flex items-center justify-center px-6 py-20"
        style={{ zIndex: 50 }}
      >
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-6xl md:text-7xl font-serif text-white uppercase tracking-wider mb-12">
            Contatti
          </h2>

          <a
            href="mailto:arte@massimodistefano.com"
            className="text-xl md:text-2xl text-gray-300 hover:text-white transition-colors mb-16 block"
          >
            arte@massimodistefano.com
          </a>

          <div className="flex justify-center items-center gap-8 mb-16">
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
};

export default HomeLayered;
