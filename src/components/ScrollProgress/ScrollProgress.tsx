import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

type Section = {
  id: string;
  label: string;
};

const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tools', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'typography', label: 'Design' },
  { id: 'contact', label: 'Contact' },
];

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${styles.scrollProgress} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.progressLine} />
      <div className={styles.dotsContainer}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.dot} ${
              activeSection === section.id ? styles.active : ''
            }`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            title={section.label}
          />
        ))}
      </div>
    </nav>
  );
};

export default ScrollProgress;
