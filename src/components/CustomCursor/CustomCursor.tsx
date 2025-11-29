import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let moveTimeout: ReturnType<typeof setTimeout> | null = null;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseRef.current = { x: mouseX, y: mouseY };
      setIsMoving(true);

      // Create trail particles
      const distance = Math.sqrt(
        Math.pow(mouseX - lastMouseRef.current.x, 2) +
          Math.pow(mouseY - lastMouseRef.current.y, 2)
      );

      if (distance > 8) {
        createTrailParticle(mouseX, mouseY);
        lastMouseRef.current = { x: mouseX, y: mouseY };
      }

      // Reset movement flag after delay
      if (moveTimeout) {
        clearTimeout(moveTimeout);
      }
      moveTimeout = window.setTimeout(() => {
        setIsMoving(false);
        moveTimeout = null;
      }, 50);
    };

    const createTrailParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = styles.trailParticle;
      document.body.appendChild(particle);

      // Style inline for dynamic positioning
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.background = `radial-gradient(circle, rgba(123,123,123,0.6) 0%, rgba(123,123,123,0) 70%)`;

      particlesRef.current.push(particle);

      // Animate out and remove
      setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'translate(-50%, -50%) scale(0)';
      }, 10);

      setTimeout(() => {
        particle.remove();
        particlesRef.current = particlesRef.current.filter(
          (p) => p !== particle
        );
      }, 600);
    };

    const animate = () => {
      const speed = 0.15;
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', moveCursor);
    rafRef.current = requestAnimationFrame(animate);

    // Interactive element handlers
    const handleInteractiveEnter = () => {
      dot.classList.add(styles.dotHover);
    };

    const handleInteractiveLeave = () => {
      dot.classList.remove(styles.dotHover);
    };

    const interactiveSelectors =
      'a, button, [role="button"], input, textarea, select';
    const interactiveEls = Array.from(
      document.querySelectorAll<HTMLElement>(interactiveSelectors)
    );

    // Attach hover handlers to interactive elements
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleInteractiveEnter);
      el.addEventListener('mouseleave', handleInteractiveLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractiveEnter);
        el.removeEventListener('mouseleave', handleInteractiveLeave);
      });
      particlesRef.current.forEach((p) => p.remove());
      // Clear any pending movement timeout
      // moveTimeout is declared in the same useEffect scope
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (typeof moveTimeout !== 'undefined' && moveTimeout !== null) {
          clearTimeout(moveTimeout);
        }
      } catch {
        // ignore in case moveTimeout isn't accessible for some reason
      }
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${isMoving ? styles.dotMoving : ''}`}
      />
    </>
  );
};

export default CustomCursor;
