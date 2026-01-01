import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import styles from './ProjectDetailPage.module.css';
import { projectsData } from '../../data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.wrapper}>
        <article className={styles.card}>
          <header className={styles.header}>
            <Link to="/" className={styles.backLink}>
              ← Back to projects
            </Link>
            <div>
              <p className={styles.sectionLabel}>PROJECT</p>
              <h1 className={styles.title}>Not found</h1>
            </div>
          </header>
          <div className={styles.content}>
            <p className={styles.description}>
              The project you are looking for does not exist or was moved.
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <article className={styles.card}>
        <header className={styles.header}>
          <Link to="/" className={styles.backLink}>
            ← Back to projects
          </Link>
          <div>
            <p className={styles.sectionLabel}>PROJECT</p>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
        </header>

        <div className={styles.content}>
          {/* Hero image - now smaller, 16:9 aspect */}
          <figure className={styles.heroFigure}>
            <div className={styles.heroImageWrapper}>
              <img
                src={project.imageUrl}
                alt={project.title + ' preview'}
                className={styles.heroImage}
              />
            </div>
          </figure>

          {/* Tech meta - small and out of the way */}
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Tech stack:</span>
            <div className={styles.chipRow}>
              {project.tech.map((t) => (
                <span key={t} className={styles.chip}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Main article content - tons of space for text */}
          <div className={styles.article}>
            <p className={styles.description}>{project.description}</p>
            {/* You can add more paragraphs, sections, images here */}
            {/* <section className={styles.section}>
              <h2>Features</h2>
              <p>Your detailed text...</p>
            </section> */}
          </div>

          {/* Links at bottom */}
          <footer className={styles.linksRow}>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryLink}
              >
                View live project →
              </a>
            )}
            {project.repoUrl && project.repoUrl !== '#' && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryLink}
              >
                View source →
              </a>
            )}
          </footer>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
