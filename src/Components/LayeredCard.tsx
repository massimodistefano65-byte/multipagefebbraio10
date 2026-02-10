import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface LayeredCardProps {
  category: string;
  gradient: string;
  link: string;
  zIndex: number;
}

const LayeredCard = ({ category, gradient, link, zIndex }: LayeredCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const card = cardRef.current;
      const inner = innerRef.current;
      if (!card || !inner) return;

      const rect = card.getBoundingClientRect();
      const scrollPast = -rect.top;
      const cardHeight = rect.height;

      if (scrollPast > 0 && scrollPast < cardHeight) {
        const progress = Math.min(scrollPast / cardHeight, 1);
        const scale = 1 - progress * 0.1;
        const brightness = 1 - progress * 0.3;
        inner.style.transform = `scale(${scale})`;
        inner.style.filter = `brightness(${brightness})`;
      } else if (scrollPast <= 0) {
        inner.style.transform = "scale(1)";
        inner.style.filter = "brightness(1)";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    setButtonPos({
      x: e.clientX - rect.left - 40,
      y: e.clientY - rect.top - 20,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="sticky top-0 h-screen w-full"
      style={{ zIndex }}
    >
      <div
        ref={innerRef}
        className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
        style={{
          transition: "transform 0.15s linear, filter 0.15s linear",
          transformOrigin: "center center",
          willChange: "transform, filter",
        }}
      >
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

        <Link
          to={link}
          className="absolute"
          style={{
            left: `${buttonPos.x}px`,
            top: `${buttonPos.y}px`,
            transform: "translate(-50%, -50%)",
            zIndex: 20,
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
