import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface LayeredCardProps {
  category: string;
  gradient: string;
  link: string;
  zIndex: number;
}

function LayeredCard({ category, gradient, link, zIndex }: LayeredCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);

  // scroll-driven state for scale + brightness
  const [scale, setScale] = useState(1);
  const [brightness, setBrightness] = useState(1);

  // mouse-follow VIEW button
  const [btnX, setBtnX] = useState(-200);
  const [btnY, setBtnY] = useState(-200);
  const [showBtn, setShowBtn] = useState(false);

  // depth shadow grows as card is covered
  const shadowOpacity = Math.max(0, (1 - scale) * 10); // 0 -> 1

  useEffect(() => {
    function onScroll() {
      // cancel any queued frame so we only run once per paint
      cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const el = cardRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const h = el.offsetHeight || 1;

        // scrollPast = how many px the sticky wrapper has scrolled above viewport top
        const scrollPast = -rect.top;

        if (scrollPast > 0 && scrollPast < h) {
          const progress = scrollPast / h;                  // 0 -> 1
          const nextScale = 1 - Math.min(progress, 1) * 0.1;  // 1.0 -> 0.9
          const nextBright = 1 - Math.min(progress, 1) * 0.3; // 1.0 -> 0.7
          setScale(nextScale);
          setBrightness(nextBright);
        } else if (scrollPast <= 0) {
          setScale(1);
          setBrightness(1);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once on mount so the first card renders correctly
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="sticky top-0"
      style={{
        zIndex,
        height: "100vh",
        minHeight: "100vh",
      }}
      onMouseMove={(e) => {
        const el = cardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setBtnX(e.clientX - r.left);
        setBtnY(e.clientY - r.top);
      }}
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      {/* Inner card -- scale + dim driven by React state */}
      <div
        className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
        style={{
          transform: `scale(${scale})`,
          filter: `brightness(${brightness})`,
          transition: "transform 0.15s linear, filter 0.15s linear",
          transformOrigin: "center center",
          boxShadow:
            shadowOpacity > 0.01
              ? `0 ${8 + shadowOpacity * 20}px ${20 + shadowOpacity * 40}px rgba(0,0,0,${0.2 + shadowOpacity * 0.5})`
              : "none",
        }}
      >
        {/* Category name */}
        <h2
          className="text-center font-serif text-white uppercase tracking-wider pointer-events-none select-none"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            lineHeight: "1",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {category}
        </h2>

        {/* VIEW button follows mouse */}
        <Link
          to={link}
          className="absolute pointer-events-auto"
          style={{
            left: btnX,
            top: btnY,
            transform: "translate(-50%, -50%)",
            opacity: showBtn ? 1 : 0,
            transition: "opacity 0.15s",
            zIndex: 20,
          }}
        >
          <span className="inline-block px-8 py-4 bg-white/90 hover:bg-white text-black font-bold uppercase tracking-widest rounded-full text-sm shadow-2xl hover:shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer">
            VIEW
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LayeredCard;
