import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface LayeredCardProps {
  category: string;
  gradient: string;
  link: string;
  zIndex: number;
  isLast?: boolean;
}

function LayeredCard({
  category,
  gradient,
  link,
  zIndex,
  isLast = false,
}: LayeredCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);

  const [scale, setScale] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  const [btnX, setBtnX] = useState(-9999);
  const [btnY, setBtnY] = useState(-9999);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    // Last card never shrinks -- nothing comes after it
    if (isLast) return;

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = cardRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const h = rect.height || 1;
        const scrollPast = -rect.top;

        if (scrollPast > 0 && scrollPast < h) {
          const p = Math.min(scrollPast / h, 1);
          setScale(1 - p * 0.35);        // 1.0  ->  0.65
          setBrightness(1 - p * 0.5);    // 1.0  ->  0.5
          setTranslateY(p * 20);          // 0    ->  20px
        } else if (scrollPast <= 0) {
          setScale(1);
          setBrightness(1);
          setTranslateY(0);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isLast]);

  // Shadow grows as the card shrinks
  const progress = Math.max(0, 1 - scale) / 0.35; // normalise 0..1
  const shadow =
    progress > 0.01
      ? `0 ${10 + progress * 30}px ${30 + progress * 60}px rgba(0,0,0,${
          0.3 + progress * 0.5
        })`
      : "0 4px 20px rgba(0,0,0,0.15)";

  return (
    <div
      ref={cardRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex,
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseMove={(e) => {
        const el = cardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setBtnX(e.clientX - r.left);
        setBtnY(e.clientY - r.top);
      }}
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => {
        setShowBtn(false);
        setBtnX(-9999);
        setBtnY(-9999);
      }}
    >
      {/* Inner visible card */}
      <div
        className={`bg-gradient-to-br ${gradient}`}
        style={{
          position: "relative",
          width: "85%",
          height: "92%",
          borderRadius: 50,
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${scale}) translateY(${translateY}px)`,
          filter: `brightness(${brightness})`,
          transition: "transform 0.12s linear, filter 0.12s linear, box-shadow 0.12s linear",
          transformOrigin: "center center",
          boxShadow: shadow,
          willChange: "transform, filter",
        }}
      >
        {/* Category title */}
        <h2
          style={{
            textAlign: "center",
            fontFamily: "serif",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            pointerEvents: "none",
            userSelect: "none",
            fontSize: "clamp(36px, 8vw, 80px)",
            lineHeight: 1,
            textShadow: "0 4px 30px rgba(0,0,0,0.4)",
          }}
        >
          {category}
        </h2>

        {/* VIEW button follows mouse */}
        <Link
          to={link}
          style={{
            position: "absolute",
            left: btnX,
            top: btnY,
            transform: "translate(-50%, -50%)",
            opacity: showBtn ? 1 : 0,
            transition: "opacity 0.15s",
            zIndex: 20,
            pointerEvents: showBtn ? "auto" : "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "16px 32px",
              background: "rgba(255,255,255,0.92)",
              color: "#000",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              borderRadius: 9999,
              fontSize: 14,
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
              cursor: "pointer",
            }}
          >
            VIEW
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LayeredCard;
