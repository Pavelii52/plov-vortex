import { useEffect, useRef, useState, useCallback } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const AMBIENT_SPAWN_RATE = 0.6; // embers per frame (probabilistic)
const HEAT_DECAY_PER_SEC = 6; // heat cools down over time
const HEAT_PER_CLICK = 9;

/**
 * A playful, self-contained "stoke the fire under the kazan" easter egg.
 * - Ambient embers drift upward continuously (canvas particle system).
 * - Clicking/tapping anywhere bursts extra sparks from that point.
 * - A "Раздуй огонь" button builds up a heat meter; reaching 100% pays off
 *   with a little fireworks-of-embers moment and a fun message.
 * Respects prefers-reduced-motion by falling back to a static glow.
 */
const InteractiveKazan = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const embersRef = useRef<Ember[]>([]);
  const rafRef = useRef<number>();
  const heatRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const celebratedRef = useRef(false);

  const [heat, setHeat] = useState(0);
  const [celebrating, setCelebrating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const spawnBurst = useCallback((x: number, y: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.8;
      const speed = 0.6 + Math.random() * 2.2;
      embersRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 900 + Math.random() * 900,
        size: 1.5 + Math.random() * 2.5,
        hue: 20 + Math.random() * 35, // orange -> gold range
      });
    }
  }, []);

  // Main animation loop
  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * devicePixelRatio;
      height = canvas.height = rect.height * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = (t: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = Math.min(48, t - lastTimeRef.current);
      lastTimeRef.current = t;

      // Ambient embers spawn near the bottom center
      if (Math.random() < AMBIENT_SPAWN_RATE * (0.4 + heatRef.current / 120)) {
        spawnBurst(
          width * (0.35 + Math.random() * 0.3),
          height * 0.95,
          1
        );
      }

      ctx.clearRect(0, 0, width, height);

      embersRef.current = embersRef.current.filter((e) => {
        e.life += dt;
        if (e.life >= e.maxLife) return false;
        e.x += e.vx * (dt / 16);
        e.y += e.vy * (dt / 16) - 0.02 * dt;
        e.vx *= 0.995;
        const progress = e.life / e.maxLife;
        const alpha = 1 - progress;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${e.hue}, 95%, ${55 + progress * 20}%, ${alpha})`;
        ctx.shadowColor = `hsla(${e.hue}, 100%, 60%, ${alpha})`;
        ctx.shadowBlur = 6;
        ctx.arc(e.x, e.y, e.size * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      // Heat cools down naturally
      if (heatRef.current > 0) {
        heatRef.current = Math.max(0, heatRef.current - (HEAT_DECAY_PER_SEC * dt) / 1000);
        setHeat(heatRef.current);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, spawnBurst]);

  const handlePointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * devicePixelRatio;
    const y = (e.clientY - rect.top) * devicePixelRatio;
    spawnBurst(x, y, 10);
  };

  const stokeFire = () => {
    heatRef.current = Math.min(100, heatRef.current + HEAT_PER_CLICK);
    setHeat(heatRef.current);

    if (!reducedMotion) {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        spawnBurst(
          rect.width * 0.5 * devicePixelRatio,
          rect.height * 0.9 * devicePixelRatio,
          14
        );
      }
    }

    if (heatRef.current >= 100 && !celebratedRef.current) {
      celebratedRef.current = true;
      setCelebrating(true);
      if (!reducedMotion) {
        const canvas = canvasRef.current;
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          for (let i = 0; i < 6; i++) {
            setTimeout(() => {
              spawnBurst(
                rect.width * Math.random() * devicePixelRatio,
                rect.height * 0.85 * devicePixelRatio,
                20
              );
            }, i * 120);
          }
        }
      }
      setTimeout(() => {
        celebratedRef.current = false;
        heatRef.current = 0;
        setHeat(0);
        setCelebrating(false);
      }, 4200);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Разомнёмся
          </span>
          <h2 className="section-title mt-2">
            Раздуй огонь под <span className="golden-text">казаном</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Кликай по огню или жми кнопку — посмотрим, получится ли у тебя
            развести жар, как у настоящего ошпаза.
          </p>
        </div>

        <div
          onClick={handlePointer}
          className="relative mx-auto max-w-2xl h-72 sm:h-80 rounded-3xl border border-primary/30 bg-gradient-to-b from-charcoal via-deep-brown to-charcoal overflow-hidden cursor-pointer select-none"
          role="button"
          aria-label="Кликни, чтобы искры разлетелись"
        >
          {/* Canvas embers */}
          {!reducedMotion && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          )}

          {/* Static glow fallback / base flame gradient */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 rounded-full blur-2xl transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(closest-side, hsla(30,100%,55%,0.55), transparent)",
              opacity: 0.5 + heat / 200,
            }}
          />

          {/* Kazan silhouette */}
          <svg
            viewBox="0 0 200 80"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-56 drop-shadow-[0_0_18px_rgba(255,140,0,0.4)]"
          >
            <ellipse cx="100" cy="20" rx="70" ry="12" fill="hsl(var(--charcoal))" opacity="0.9" />
            <path
              d="M20 20 Q20 70 100 75 Q180 70 180 20"
              fill="hsl(var(--charcoal))"
              stroke="hsl(var(--gold-dark))"
              strokeWidth="2"
            />
            <ellipse cx="100" cy="20" rx="66" ry="9" fill="hsl(var(--deep-brown))" />
          </svg>

          {celebrating && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm animate-fade-in-up">
              <p className="font-display text-xl sm:text-2xl text-center px-6">
                <span className="golden-text">Огонь готов! 🔥</span>
                <br />
                <span className="text-base sm:text-lg text-foreground/90">
                  Настоящий жар для настоящего плова.
                </span>
              </p>
            </div>
          )}

          {reducedMotion && !celebrating && (
            <p className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground px-6 text-center">
              Анимация искр отключена настройками устройства — жми кнопку ниже,
              шкала жара всё равно работает.
            </p>
          )}
        </div>

        {/* Heat meter + button */}
        <div className="max-w-md mx-auto mt-6 flex flex-col items-center gap-3">
          <div className="w-full h-3 rounded-full bg-card border border-border/50 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{
                width: `${heat}%`,
                background:
                  "linear-gradient(90deg, hsl(var(--flame-orange)), hsl(var(--gold)))",
              }}
            />
          </div>
          <button
            type="button"
            onClick={stokeFire}
            className="btn-primary"
          >
            {heat >= 100 ? "Огонь пылает!" : "Раздуть огонь"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveKazan;
