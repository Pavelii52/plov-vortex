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
  gravity: number;
  friction: number;
  trail: boolean;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, prevX: -100, prevY: -100 });
  const rafRef = useRef<number>();
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
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
          hue: 35 + Math.random() * 20,
          gravity: -0.02,
          friction: 0.96,
          trail: false,
        });
      }
      if (particlesRef.current.length > 600) {
        particlesRef.current.splice(0, particlesRef.current.length - 600);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const playBoom = () => {
      try {
        if (!audioCtxRef.current) {
          const Ctx = window.AudioContext || (window as any).webkitAudioContext;
          audioCtxRef.current = new Ctx();
        }
        const ac = audioCtxRef.current!;
        if (ac.state === "suspended") ac.resume();
        const now = ac.currentTime;

        // Soft low-frequency boom
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.5);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.4, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
        osc.connect(gain).connect(ac.destination);
        osc.start(now);
        osc.stop(now + 0.75);

        // Sparkle noise burst
        const bufferSize = ac.sampleRate * 0.4;
        const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
        }
        const noise = ac.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = ac.createGain();
        const filter = ac.createBiquadFilter();
        filter.type = "highpass";
        filter.frequency.value = 1200;
        noiseGain.gain.setValueAtTime(0.15, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
        noise.connect(filter).connect(noiseGain).connect(ac.destination);
        noise.start(now);
      } catch {
        // ignore
      }
    };

    const spawnFirework = (x: number, y: number) => {
      const count = 60 + Math.floor(Math.random() * 30);
      const baseHue = Math.random() * 360;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.1;
        const speed = 2 + Math.random() * 4;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          size: 2 + Math.random() * 3,
          hue: (baseHue + Math.random() * 60) % 360,
          gravity: 0.06,
          friction: 0.97,
          trail: true,
        });
      }
      playBoom();
    };

    const handleClick = (e: MouseEvent) => {
      if (e.button === 0) spawnFirework(e.clientX, e.clientY);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const x = mouseRef.current.x > 0 ? mouseRef.current.x : window.innerWidth / 2;
        const y = mouseRef.current.y > 0 ? mouseRef.current.y : window.innerHeight / 2;
        spawnFirework(x, y);
      }
    };
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKey);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.friction;
        p.vy *= p.friction;

        const lifeRatio = 1 - p.life / p.maxLife;
        if (lifeRatio <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const radius = p.size * (p.trail ? Math.max(0.4, lifeRatio) : lifeRatio);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 95%, 65%, ${0.7 * lifeRatio})`);
        gradient.addColorStop(0.4, `hsla(${p.hue}, 95%, 55%, ${0.3 * lifeRatio})`);
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
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleKey);
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
