import React from 'react';
import styles from './VerticalLine.module.css';

type Props = {
  topLabel?: string;
  bottomLabel?: string;
  leftOffsetPx?: number;
};

const VerticalLine: React.FC<Props> = ({
  topLabel = 'Web Developer',
  bottomLabel,
  leftOffsetPx = 20,
}) => {
  const year = bottomLabel ?? String(new Date().getFullYear());

  return (
    <div
      className={styles.container}
      style={{ left: `${leftOffsetPx}px` }}
      aria-hidden="true"
      role="presentation"
    >
      <div className={styles.topWrap}>
        <span className={styles.label}>{topLabel}</span>
      </div>

      <div className={styles.line} />

      <div className={styles.bottomWrap}>
        <span className={styles.label}>{year}</span>
      </div>
    </div>
  );
};

export default VerticalLine;
