import styles from './ScrollDown.module.css';

type Props = {
  targetId?: string;
  offset?: number;
  label?: string;
};

const ScrollDown: React.FC<Props> = ({
  targetId,
  offset = 0,
  label = 'scroll down',
}) => {
  const handleActivate = (ev?: React.MouseEvent | React.KeyboardEvent) => {
    ev?.preventDefault();

    // If target id provided and exists, scroll to it; otherwise scroll one viewport height
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }

    // fallback: scroll down by one viewport height
    const top = Math.min(
      window.scrollY + window.innerHeight,
      document.body.scrollHeight
    );
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleActivate(e);
    }
  };

  return (
    <button
      className={styles.container}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      aria-label={label}
      title={label}
    >
      <span className={styles.label}>{label}</span>

      <span className={styles.arrowWrapper} aria-hidden="true">
        <svg
          className={styles.arrow}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default ScrollDown;
