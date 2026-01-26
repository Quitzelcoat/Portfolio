import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutStyles from './About.module.css';
import { aboutContent } from '../../data/aboutData';

const About: React.FC = () => {
  const imgRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const lineY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const bgTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.02, 0.06, 0.02],
  );

  return (
    <section id="about" className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutTopRight}>
        <span className={aboutStyles.aboutLabel}>About</span>
        <span className={aboutStyles.aboutLine}></span>
      </div>

      <motion.span
        className={aboutStyles.aboutBgText}
        style={{ y: bgTextY, opacity: bgTextOpacity }}
        aria-hidden="true"
      >
        ABOUT
      </motion.span>

      <div ref={imgRef} className={aboutStyles.imgContainer}>
        <motion.div
          className={aboutStyles.imgLine}
          style={{ y: lineY }}
          aria-hidden="true"
        />
        <motion.img
          src="/images/quitz.jpg"
          alt="Portrait of Haris"
          className={aboutStyles.img}
          style={{ y: imgY }}
        />
      </div>

      <motion.article
        className={aboutStyles.aboutArticle}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2>
          {aboutContent.heading}
          <span className={aboutStyles.aboutDot}>.</span>
        </h2>

        {aboutContent.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </motion.article>
    </section>
  );
};

export default About;
