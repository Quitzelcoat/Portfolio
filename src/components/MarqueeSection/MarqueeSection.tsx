import marqueeStyles from './MarqueeSection.module.css';

const MarqueeSection = () => {
  return (
    <section className={marqueeStyles.marqueeSection}>
      {/* Line 1: Left to Right */}
      <div className={marqueeStyles.marqueeRow}>
        <div
          className={`${marqueeStyles.marqueeContent} ${marqueeStyles.leftToRight}`}
        >
          <span>Full-Stack Development</span>
          <span>•</span>
          <span>User-Centric Design</span>
          <span>•</span>
          <span>Responsive Interfaces</span>
          <span>•</span>
          <span>Scalable Solutions</span>
          <span>•</span>
          <span>Clean Code Architecture</span>
          <span>•</span>
        </div>
        <div
          className={`${marqueeStyles.marqueeContent} ${marqueeStyles.leftToRight}`}
          aria-hidden="true"
        >
          <span>Full-Stack Development</span>
          <span>•</span>
          <span>User-Centric Design</span>
          <span>•</span>
          <span>Responsive Interfaces</span>
          <span>•</span>
          <span>Scalable Solutions</span>
          <span>•</span>
          <span>Clean Code Architecture</span>
          <span>•</span>
        </div>
      </div>

      {/* Line 2: Right to Left */}
      <div className={marqueeStyles.marqueeRow}>
        <div
          className={`${marqueeStyles.marqueeContent} ${marqueeStyles.rightToLeft}`}
        >
          <span>Creative Problem Solving</span>
          <span>•</span>
          <span>Modern Tech Stack</span>
          <span>•</span>
          <span>Performance Optimization</span>
          <span>•</span>
          <span>Pixel-Perfect Execution</span>
          <span>•</span>
          <span>Agile Development</span>
          <span>•</span>
        </div>
        <div
          className={`${marqueeStyles.marqueeContent} ${marqueeStyles.rightToLeft}`}
          aria-hidden="true"
        >
          <span>Creative Problem Solving</span>
          <span>•</span>
          <span>Modern Tech Stack</span>
          <span>•</span>
          <span>Performance Optimization</span>
          <span>•</span>
          <span>Pixel-Perfect Execution</span>
          <span>•</span>
          <span>Agile Development</span>
          <span>•</span>
        </div>
      </div>

      {/* Line 3: Left to Right */}
      <div className={marqueeStyles.marqueeRow}>
        <div
          className={`${marqueeStyles.marqueeContent} ${marqueeStyles.leftToRight}`}
        >
          <span>API Integration</span>
          <span>•</span>
          <span>UI/UX Excellence</span>
          <span>•</span>
          <span>Cross-Browser Compatible</span>
          <span>•</span>
          <span>Mobile-First Approach</span>
          <span>•</span>
          <span>Continuous Learning</span>
          <span>•</span>
        </div>
        <div
          className={`${marqueeStyles.marqueeContent} ${marqueeStyles.leftToRight}`}
          aria-hidden="true"
        >
          <span>API Integration</span>
          <span>•</span>
          <span>UI/UX Excellence</span>
          <span>•</span>
          <span>Cross-Browser Compatible</span>
          <span>•</span>
          <span>Mobile-First Approach</span>
          <span>•</span>
          <span>Continuous Learning</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
