import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

interface LayeredCardProps {
  category: string;
  gradient: string;
  link: string;
  zIndex: number;
}

const LayeredCard: React.FC<LayeredCardProps> = ({
  category,
  gradient,
  link,
  zIndex,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    if (!cardRef.current || !innerRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    // When the card is stuck at top (rect.top <= 0) and scrolling continues,
    // the parent div keeps moving up. We measure how far past the viewport top
    // the parent has gone to determine how much the next card is covering this one.
    const scrollPast = -rect.top;
    const cardHeight = cardRef.current.offsetHeight;

    if (scrollPast > 0 && scrollPast < cardHeight) {
      // Progress from 0 (just stuck) to 1 (fully scrolled past)
      const progress = Math.min(scrollPast / cardHeight, 1);
      // Scale down from 1.0 to 0.9
      const scale = 1 - progress * 0.1;
      // Slightly dim the card as it goes behind
      const brightness = 1 - progress * 0.3;
      innerRef.current.style.transform = `scale(${scale})`;
      innerRef.current.style.filter = `brightness(${brightness})`;
    } else if (scrollPast <= 0) {
      innerRef.current.style.transform = "scale(1)";
      innerRef.current.style.filter = "brightness(1)";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setButtonPos({
      x: x - 40,
      y: y - 20,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="sticky top-0 h-screen w-full"
      style={{
        zIndex: zIndex,
      }}
    >
      <div
        ref={innerRef}
        className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
        style={{
          transition: "transform 0.1s linear, filter 0.1s linear",
          transformOrigin: "center center",
          borderRadius: "0px",
        }}
      >
        {/* Nome Categoria CENTRO */}
        <h2
          className="text-center font-serif text-white uppercase tracking-wider pointer-events-none"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            lineHeight: "1",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {category}
        </h2>

        {/* VIEW Button Follow Mouse */}
        <Link
          to={link}
          className="absolute z-20"
          style={{
            left: `${buttonPos.x}px`,
            top: `${buttonPos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <button className="px-8 py-4 bg-white/90 hover:bg-white text-black font-bold uppercase tracking-widest rounded-full text-sm transition-all duration-200 shadow-2xl hover:shadow-lg hover:scale-110 cursor-pointer pointer-events-auto">
            VIEW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LayeredCard;
