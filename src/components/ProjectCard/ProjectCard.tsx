import { useRef } from 'react';
import styles from './ProjectCard.module.css';
import type { Project } from '../../data/projectsData';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  project: Project;
  reverse?: boolean;
};

const ProjectCard: React.FC<Props> = ({ project, reverse }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Transform values for parallax effect - NO rotation
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const glassY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={cardRef}
      className={`${styles.projectCard} ${reverse ? styles.reverse : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.imageCardContainer}>
        <motion.div className={styles.glassBgCard} style={{ y: glassY }} />
        <motion.img
          src={project.imageUrl}
          alt={project.title + ' screenshot'}
          className={styles.projectImg}
          style={{ y: imageY }}
        />
      </div>
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.techList}>
          {project.tech.map((tech) => (
            <span className={styles.techItem} key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.linksRow}>
          {project.liveUrl && (
            <a
              className={styles.linkBtn}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project
            </a>
          )}
          {project.repoUrl && (
            <a
              className={styles.linkBtn}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
