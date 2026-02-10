import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavbarLayered = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Bio", path: "/bio" },
    { label: "Pittura", path: "/painting" },
    { label: "Digital Art", path: "/digital-art" },
    { label: "Fotografia", path: "/photography" },
    { label: "T-Shirt", path: "/tshirts" },
    { label: "Criticism", path: "/criticism" },
    { label: "Contatti", path: "/contact" },
  ];

  const renderLetters = (text: string) => {
    return text.split("").map((char, idx) => (
      <span
        key={idx}
        className="nav-link-char"
        style={{ "--i": idx } as React.CSSProperties}
      >
        {char}
      </span>
    ));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-white/0"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo Hidden */}
        <div className="flex-1" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link text-white uppercase text-sm tracking-widest transition-colors duration-300"
            >
              {renderLetters(link.label)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-300 transition-colors ml-auto"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-start pt-12 gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white uppercase text-lg tracking-widest hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarLayered;
