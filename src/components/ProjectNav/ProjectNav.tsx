import { useRef } from 'react';
import styles from './ProjectNav.module.css';
import { projectsData } from '../../data/projectsData';

const ProjectNav = () => {
  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate list for seamless infinite scroll
  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <section className={styles.projectNavSection}>
      <div className={styles.navHeader}>
        <h3 className={styles.navTitle}>Honorable Mentions</h3>
        <p className={styles.navSubtitle}>Click to jump to any project</p>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack} ref={marqueeRef}>
          <div className={styles.projectsMarquee}>
            {duplicatedProjects.map((project) => (
              <div
                key={`${project.id}-${Math.random()}`}
                className={styles.projectThumb}
                onClick={() => scrollToProject(project.id)}
              >
                <div className={styles.thumbImageWrapper}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={styles.thumbImage}
                  />
                  <div className={styles.thumbOverlay}>
                    <span className={styles.viewProject}>View Project</span>
                  </div>
                </div>
                <div className={styles.thumbInfo}>
                  <h4 className={styles.thumbTitle}>{project.title}</h4>
                  <div className={styles.thumbTechList}>
                    {project.tech.slice(0, 2).map((tech) => (
                      <span className={styles.thumbTechBadge} key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔒 LOCK OVERLAY – delete this block to unlock later */}
      <div className={styles.lockOverlay}>
        <div className={styles.lockContent}>
          <p className={styles.lockLabel}>Coming Soon</p>
          <p className={styles.lockSub}>Stay tuned!</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectNav;
