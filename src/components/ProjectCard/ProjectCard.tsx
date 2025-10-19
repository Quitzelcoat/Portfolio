import cardStyles from './ProjectCard.module.css';
import type { Project } from '../../pages/Project/Project';

type Props = {
  project: Project;
  reverse?: boolean;
};

const ProjectCard: React.FC<Props> = ({ project, reverse = false }) => {
  return (
    <article
      className={`${cardStyles.card} ${reverse ? cardStyles.reverse : ''}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className={cardStyles.mediaWrapper}>
        {/* Use next/image or <img> depending on your stack */}
        <img
          src={project.imageUrl || 'https://via.placeholder.com/600x400'}
          alt={`${project.title} screenshot`}
          className={cardStyles.thumbnail}
          loading="lazy"
        />
      </div>

      <div className={cardStyles.content}>
        <h3 id={`project-${project.id}-title`} className={cardStyles.title}>
          {project.title}
        </h3>
        <p className={cardStyles.description}>{project.description}</p>

        <ul className={cardStyles.techList}>
          {project.tech.map((t) => (
            <li key={t} className={cardStyles.techItem}>
              {t}
            </li>
          ))}
        </ul>

        <div className={cardStyles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
