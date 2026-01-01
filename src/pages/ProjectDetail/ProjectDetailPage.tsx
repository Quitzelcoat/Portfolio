import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProjectDetailPage.module.css';
import { projectsData } from '../../data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <header className={styles.headerRow}>
            <div>
              <p className={styles.sectionLabel}>PROJECT</p>
              <h2 className={styles.title}>Not found</h2>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => navigate('/')}
            >
              Back home
            </button>
          </header>
          <p className={styles.description}>
            The project you are looking for does not exist or was moved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <motion.main
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <header className={styles.headerRow}>
          <div>
            <p className={styles.sectionLabel}>PROJECT</p>
            <h1 className={styles.title}>{project.title}</h1>
          </div>
          <Link to="/" className={styles.closeBtn}>
            Back
          </Link>
        </header>

        <section className={styles.heroSection}>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroGlass} />
            <motion.img
              src={project.imageUrl}
              alt={project.title + ' full preview'}
              className={styles.heroImage}
              initial={{ scale: 1.02, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </section>

        <section className={styles.metaRow}>
          <div className={styles.metaBlock}>
            <p className={styles.metaLabel}>Tech stack</p>
            <div className={styles.chipRow}>
              {project.tech.map((t) => (
                <span key={t} className={styles.chip}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.body}>
          <p className={styles.description}>{project.description}</p>
        </section>

        <footer className={styles.linksRow}>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              View live project
            </a>
          )}
          {project.repoUrl && project.repoUrl !== '#' && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              View code
            </a>
          )}
        </footer>
      </motion.main>
    </div>
  );
};

export default ProjectDetailPage;
