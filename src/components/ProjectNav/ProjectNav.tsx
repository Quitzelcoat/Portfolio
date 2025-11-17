import styles from './ProjectNav.module.css';
import { projectsData } from '../../data/projectsData';

const ProjectNav = () => {
  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className={styles.projectNavSection}>
      <div className={styles.navHeader}>
        <h3 className={styles.navTitle}>Quick Access</h3>
        <p className={styles.navSubtitle}>Jump to any project</p>
      </div>
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <div
            key={project.id}
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
    </section>
  );
};

export default ProjectNav;
