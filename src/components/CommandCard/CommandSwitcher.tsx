import { useEffect, useState, useRef } from 'react';
import CommandCard from './CommandCard';
import type { CommandCardData } from '../../data/commandData';
import styles from './CommandSwitcher.module.css';

type Props = {
  data: CommandCardData[];
  defaultId?: string;
};

const CommandSwitcher: React.FC<Props> = ({ data, defaultId }) => {
  const getInitialIndex = () => {
    if (defaultId) {
      const i = data.findIndex((d) => d.id === defaultId);
      if (i >= 0) return i;
    }
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const i = data.findIndex((d) => d.id === hash);
      if (i >= 0) return i;
    }
    return 0;
  };

  const [index, setIndex] = useState<number>(getInitialIndex);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (data[index]) {
      try {
        window.history.replaceState(null, '', `#${data[index].id}`);
      } catch {
        console.log('Could not update URL hash');
      }
    }
  }, [index, data]);

  const focusTab = (i: number) => {
    const btn = tabsRef.current[i];
    if (btn) btn.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % data.length;
      setIndex(next);
      focusTab(next);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + data.length) % data.length;
      setIndex(prev);
      focusTab(prev);
    }
  };

  return (
    <div className={styles.switcher}>
      <div
        className={styles.tablist}
        role="tablist"
        aria-label="Command presets"
        onKeyDown={handleKeyDown}
      >
        {data.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            role="tab"
            aria-selected={index === i}
            aria-controls={`cmd-panel-${item.id}`}
            id={`cmd-tab-${item.id}`}
            className={`${styles.tab} ${index === i ? styles.active : ''}`}
            onClick={() => setIndex(i)}
          >
            {item.title ?? item.id}
          </button>
        ))}

        <select
          className={styles.mobileSelect}
          value={data[index].id}
          onChange={(e) => {
            const i = data.findIndex((d) => d.id === e.target.value);
            if (i >= 0) setIndex(i);
          }}
          aria-label="Choose command preset"
        >
          {data.map((d) => (
            <option key={d.id} value={d.id}>
              {d.title ?? d.id}
            </option>
          ))}
        </select>
      </div>

      <div
        id={`cmd-panel-${data[index].id}`}
        role="tabpanel"
        aria-labelledby={`cmd-tab-${data[index].id}`}
        className={styles.panel}
      >
        <h4 className={styles.panelTitle}>{data[index].title}</h4>
        <CommandCard initialLines={data[index].lines} />
      </div>
    </div>
  );
};

export default CommandSwitcher;
