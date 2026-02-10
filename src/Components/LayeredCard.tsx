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
  const ticking = useRef(false);

  // progress 0 = fully visible, 1 = fully covered
  const [progress, setProgress] = useState(0);

  const [btnX, setBtnX] = useState(-9999);
  const [btnY, setBtnY] = useState(-9999);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (isLast) return undefined;

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        ticking.current = false;
        const el = cardRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const h = rect.height || 1;
        // scrollPast = how many pixels the card has scrolled past the viewport top
        const scrollPast = -rect.top;

        if (scrollPast > 0 && scrollPast < h) {
          setProgress(Math.min(scrollPast / h, 1));
        } else if (scrollPast <= 0) {
          setProgress(0);
        } else {
          setProgress(1);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLast]);

  // Derived values from progress
  const p = isLast ? 0 : progress;
  const scale = 1 - p * 0.40;           // 1.0 -> 0.60
  const brightness = 1 - p * 0.50;      // 1.0 -> 0.50
  const opacity = 1 - p * 0.50;         // 1.0 -> 0.50
  const blur = p * 4;                    // 0   -> 4px
  const offsetY = p * 20;               // 0   -> 20px
  const shadowSpread = 10 + p * 40;
  const shadowBlur = 30 + p * 80;
  const shadowOpacity = 0.2 + p * 0.6;

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
        perspective: "1200px",
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
          transform: `scale(${scale}) translateY(${offsetY}px) translateZ(0)`,
          filter: `brightness(${brightness}) blur(${blur}px)`,
          opacity,
          transition:
            "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), filter 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "center center",
          boxShadow: `0 ${shadowSpread}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`,
          willChange: "transform, filter, opacity",
          backfaceVisibility: "hidden",
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
