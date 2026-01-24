// pages/ProjectDetail/ProjectDetailPage.tsx
import { useParams, Link } from 'react-router-dom';
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
          <div className={styles.body}>
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
        {/* Top bar */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <Link to="/" className={styles.backLink}>
              ← Back to projects
            </Link>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.sectionLabel}>PROJECT</p>
            <h1 className={styles.title}>{project.title}</h1>
            <div className={styles.metaRow}>
              {project.role && (
                <span className={styles.metaPill}>{project.role}</span>
              )}
              {project.timeline && (
                <span className={styles.metaPill}>{project.timeline}</span>
              )}
            </div>
          </div>
        </header>

        {/* Layout: left content, right sidebar */}
        <div className={styles.body}>
          {/* Left column */}
          <section className={styles.mainColumn}>
            {/* Overview block */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              {project.overview && (
                <p className={styles.lead}>{project.overview}</p>
              )}
            </section>

            {/* Problem / Solution */}
            {(project.problem || project.solution) && (
              <section className={styles.section}>
                <div className={styles.twoColumnText}>
                  {project.problem && (
                    <div>
                      <h3 className={styles.subTitle}>Problem</h3>
                      <p>{project.problem}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <h3 className={styles.subTitle}>Solution</h3>
                      <p>{project.solution}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className={styles.section}>
                <h3 className={styles.subTitle}>Highlights</h3>
                <ul className={styles.bulletList}>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Screens / gallery */}
            {project.images && project.images.length > 0 && (
              <section className={styles.section}>
                <div className={styles.sectionHeaderRow}>
                  <h2 className={styles.sectionTitle}>Screens</h2>
                  <span className={styles.sectionHint}>
                    Key flows from the application
                  </span>
                </div>
                <div className={styles.galleryGrid}>
                  {project.images.map((image) => (
                    <figure key={image.src} className={styles.galleryItem}>
                      <div className={styles.galleryImageWrapper}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={styles.galleryImage}
                        />
                      </div>
                      <figcaption className={styles.galleryCaption}>
                        {image.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </section>

          {/* Right column sidebar */}
          <aside className={styles.sidebar}>
            {/* Tech stack */}
            {project.tech && project.tech.length > 0 && (
              <section className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Tech stack</h3>
                <div className={styles.chipRow}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.chip}>
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Links */}
            {(project.liveUrl || project.repoUrl) && (
              <section className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Links</h3>
                <div className={styles.linksColumn}>
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
                </div>
              </section>
            )}
          </aside>
        </div>
      </article>
    </div>
  );
};

export default ProjectDetailPage;
