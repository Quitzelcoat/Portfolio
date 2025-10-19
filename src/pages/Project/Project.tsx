import styles from './Project.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
};

const projectsData: Project[] = [
  {
    id: 'p1',
    title: 'Portfolio Site',
    description:
      'A personal portfolio built with React + TypeScript. Responsive layout, accessible components, and deployed on Netlify.',
    tech: ['React', 'TypeScript', 'CSS Modules'],
    imageUrl: '/images/project1.png', // replace with real path or CDN
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'p2',
    title: 'Todo App',
    description:
      'A task management app with CRUD, localStorage persistence and filters. Good for practicing state management.',
    tech: ['React', 'Hooks', 'LocalStorage'],
    imageUrl: '/images/project2.png',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'p3',
    title: 'API Dashboard',
    description:
      'Dashboard that consumes external APIs and visualizes data. Includes charts and responsive grid.',
    tech: ['React', 'Chart.js', 'Fetch API'],
    imageUrl: '/images/project3.png',
    repoUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.projectsList}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 === 1} // alternate layout
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
