import { useState, useRef } from "react";
import { Link } from "react-router-dom";

interface LayeredCardProps {
  category: string;
  gradient: string;
  link: string;
  zIndex: number;
}

const LayeredCard = ({ category, gradient, link, zIndex }: LayeredCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [buttonPos, setButtonPos] = useState({ x: -9999, y: -9999 });

  return (
    <div
      ref={cardRef}
      onMouseMove={(e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        setButtonPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseLeave={() => setButtonPos({ x: -9999, y: -9999 })}
      className={`bg-gradient-to-br ${gradient}`}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        minHeight: "100vh",
        width: "100%",
        zIndex,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontFamily: "serif",
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          pointerEvents: "none",
          fontSize: "clamp(40px, 8vw, 80px)",
          lineHeight: 1,
          textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {category}
      </h2>

      <Link
        to={link}
        style={{
          position: "absolute",
          left: buttonPos.x,
          top: buttonPos.y,
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          pointerEvents: buttonPos.x === -9999 ? "none" : "auto",
          opacity: buttonPos.x === -9999 ? 0 : 1,
        }}
      >
        <button className="px-8 py-4 bg-white/90 hover:bg-white text-black font-bold uppercase tracking-widest rounded-full text-sm transition-all duration-200 shadow-2xl hover:shadow-lg hover:scale-110 cursor-pointer">
          VIEW
        </button>
      </Link>
    </div>
  );
};

export default LayeredCard;
