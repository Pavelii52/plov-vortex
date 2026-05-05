import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, prevX: -100, prevY: -100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const dx = mouseRef.current.x - mouseRef.current.prevX;
      const dy = mouseRef.current.y - mouseRef.current.prevY;
      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 30);
      const count = Math.max(1, Math.floor(speed / 4));

      for (let i = 0; i < count; i++) {
        const t = i / count;
        particlesRef.current.push({
          x: mouseRef.current.prevX + dx * t,
          y: mouseRef.current.prevY + dy * t,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.3,
          life: 0,
          maxLife: 50 + Math.random() * 30,
          size: 3 + Math.random() * 4,
          hue: 35 + Math.random() * 20, // gold/orange
        });
      }
      if (particlesRef.current.length > 250) {
        particlesRef.current.splice(0, particlesRef.current.length - 250);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.02;
        p.vx *= 0.96;

        const lifeRatio = 1 - p.life / p.maxLife;
        if (lifeRatio <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const radius = p.size * lifeRatio;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 95%, 60%, ${0.6 * lifeRatio})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 95%, 50%, ${0.25 * lifeRatio})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 95%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
