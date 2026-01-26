import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import toolStyle from './Tools.module.css';
import { toolsData } from '../../data/toolsData';

type ToolKey = keyof typeof toolsData;

const cardList: { key: ToolKey; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'misc', label: 'Miscellaneous' },
];

const Tools: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.02, 0.06, 0.02],
  );

  return (
    <section id="tools" ref={sectionRef} className={toolStyle.toolSection}>
      <motion.span
        className={toolStyle.toolsBgText}
        style={{ y: bgY, opacity: bgOpacity }}
        aria-hidden="true"
      >
        SKILLS
      </motion.span>

      <div className={toolStyle.topLeftAccent}>
        <span className={toolStyle.sectionLabel}>Tools & Skills</span>
        <span className={toolStyle.sectionLine}></span>
      </div>

      <article className={toolStyle.toolsGrid}>
        {cardList.map((card, idx) => (
          <motion.div
            className={toolStyle.toolCard}
            key={card.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: idx * 0.06,
            }}
          >
            <h3>{card.label}</h3>

            <div className={toolStyle.skillsGrid}>
              {toolsData[card.key].map((skill, sIdx) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    className={toolStyle.skillBox}
                    key={skill.name}
                    initial={{ opacity: 0, y: 10, scale: 0.995 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.18 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.2, 0.8, 0.2, 1],
                      delay: sIdx * 0.02,
                    }}
                  >
                    <IconComponent
                      className={toolStyle.skillIcon}
                      aria-label={skill.name + ' icon'}
                      title={skill.name}
                    />
                    <span className={toolStyle.skillName}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </article>

      <div className={toolStyle.letsMeetContainer}>
        <motion.button
          className={toolStyle.letsMeetBtn}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.12,
          }}
          onClick={() =>
            window.open(
              'https://cal.com/haris-saeed-loytzu',
              '_blank',
              'noopener,noreferrer',
            )
          }
        >
          Let's Meet
        </motion.button>
      </div>
    </section>
  );
};

export default Tools;
