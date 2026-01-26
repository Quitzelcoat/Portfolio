import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.headingRow}>
        <span className={styles.headingLine} />
        <h2 className={styles.headingText}>Contact Me</h2>
        <span className={styles.headingLine} />
      </div>

      <p className={styles.contactLead}>
        Available for freelance work, collaborations, or just a friendly chat.
      </p>

      <div className={styles.contactContent}>
        <div className={styles.contactBlock}>
          <h3 className={styles.blockTitle}>Write me an email</h3>
          <a href="mailto:haris76689@gmail.com" className={styles.emailLink}>
            haris76689@gmail.com
          </a>
        </div>

        <div className={styles.contactBlock}>
          <h3 className={styles.blockTitle}>Reach me online</h3>
          <div className={styles.socialRow}>
            <a
              href="https://github.com/Quitzelcoat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.iconLink}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/quitz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.iconLink}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/direstate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.iconLink}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
