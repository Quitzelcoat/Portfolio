import styles from './Project.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => (
  <section id="projects" className={styles.projectsSection}>
    <span className={styles.projectsBgText}>PROJECTS</span>
    <div className={styles.topRightAccent}>
      <span className={styles.sectionLabel}>Projects</span>
      <span className={styles.sectionLine}></span>
    </div>
    <div className={styles.projectsList}>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  </section>
);

export default Projects;
