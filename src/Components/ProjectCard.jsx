import { Github } from 'lucide-react';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on GitHub
          <Github className={styles.githubIcon} size={16} />
        </a>
      </div>
    </div>
  );
};