import React, { useEffect, useState } from 'react';
import styles from './AnimatedHello.module.css';

type Props = {
  greetings?: string[];
  interval?: number; // ms
};

const defaultGreetings = [
  'Hello', // English
  'Hola', // Spanish
  'Bonjour', // French
  'سلام', // Persian/Urdu/Arabic (Salam)
  'नमस्ते', // Hindi
  '你好', // Chinese
  'こんにちは', // Japanese
  'Olá', // Portuguese
];

const AnimatedHello: React.FC<Props> = ({
  greetings = defaultGreetings,
  interval = 2000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % greetings.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [greetings.length, interval]);

  // using key to retrigger CSS animation on change
  return (
    <span className={styles.wrapper} aria-live="polite">
      <span key={index} className={styles.greeting}>
        {greetings[index]}
      </span>
    </span>
  );
};

export default AnimatedHello;
