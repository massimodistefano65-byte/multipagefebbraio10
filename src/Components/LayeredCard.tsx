import React, { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

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
      className={`sticky top-0 h-screen w-screen flex items-center justify-center transition-all duration-1000 ${
        isVisible ? "card-visible" : "card-hidden"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        zIndex: zIndex,
      }}
    >
      <div className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Nome Categoria CENTRO */}
        <h2 className="text-center font-serif text-white uppercase tracking-wider pointer-events-none"
            style={{
              fontSize: "80px",
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
