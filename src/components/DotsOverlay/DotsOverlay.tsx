import { useMemo } from 'react';
import styles from './DotsOverlay.module.css';

type Props = {
  count?: number;
  seed?: number;
};

function createRng(seed?: number) {
  if (seed == null) return () => Math.random();
  let s = Math.floor(seed) >>> 0;
  if (s === 0) s = 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const DotsOverlay: React.FC<Props> = ({ count = 50, seed }) => {
  const dots = useMemo(() => {
    const rng = createRng(seed);

    type Dot = {
      left: string;
      top: string;
      width: string;
      height: string;
      opacity: number;
      background: string;
      styleVars: React.CSSProperties;
    };

    const out: Dot[] = [];
    for (let i = 0; i < Math.max(0, Math.floor(count)); i++) {
      const left = +(rng() * 100).toFixed(2) + '%';
      const top = +(rng() * 100).toFixed(2) + '%';
      const size = Math.round(8 + rng() * 28) + 'px'; // 8-36px
      const hue = Math.round(rng() * 360);
      const opacity = +(0.12 + rng() * 0.45).toFixed(3); // 0.12 - 0.57
      const dur = +(12 + rng() * 22).toFixed(2); // 12 - 34 seconds
      const delay = +(-rng() * dur).toFixed(2); // negative so mid-animation
      const hueDur = Math.max(8, +(dur * 0.6).toFixed(2));
      const hueDelay = +(delay / 2).toFixed(2);

      const colorA = `hsl(${hue} 85% 60%)`;
      const colorB = `hsl(${(hue + 40) % 360} 85% 62%)`;
      const bg = `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.18) 18%, transparent 48%), linear-gradient(180deg, ${colorA}, ${colorB})`;

      out.push({
        left,
        top,
        width: size,
        height: size,
        opacity,
        background: bg,
        styleVars: {
          '--dur': `${dur}s`,
          '--delay': `${delay}s`,
          '--huedur': `${hueDur}s`,
          '--hueddelay': `${hueDelay}s`,
        } as React.CSSProperties,
      });
    }
    return out;
  }, [count, seed]);

  return (
    <div className={styles.overlay} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className={styles.dot}
          style={{
            left: d.left,
            top: d.top,
            width: d.width,
            height: d.height,
            opacity: d.opacity,
            background: d.background,
            ...(d.styleVars as object),
          }}
        />
      ))}
    </div>
  );
};

export default DotsOverlay;
