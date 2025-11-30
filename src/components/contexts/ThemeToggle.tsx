import { useTheme } from './useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className={styles.icon} />
      ) : (
        <FaSun className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeToggle;
