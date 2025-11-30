import { useEffect, useRef } from 'react';
import styles from './DotsOverlay.module.css';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

const DotsOverlay: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles
    const particleCount = Math.min(
      80,
      Math.floor((canvas.width * canvas.height) / 15000)
    );
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseColor = theme === 'light' ? '#7B7B7B' : '#F8F8F8';
      const altColor = theme === 'light' ? '#222222' : '#7B7B7B';

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1.5,
        // Alternate colors respecting palette and theme
        color: Math.random() > 0.5 ? baseColor : altColor,
      });
    }
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      if (!ctxRef.current || !canvasRef.current) return;
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx -= (dx / distance) * force * 0.08;
          particle.vy -= (dy / distance) * force * 0.08;
        }

        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.4 + Math.random() * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Draw connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx2 = other.x - particle.x;
          const dy2 = other.y - particle.y;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 80) {
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = ((80 - distance2) / 80) * 0.15;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
  );
};

export default DotsOverlay;
