import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './SocialIcons.module.css';

const SocialIcons: React.FC = () => {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Quitzelcoat',
      icon: FaGithub,
      color: '#333333',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/haris-saeed-b91900276/',
      icon: FaLinkedin,
      color: '#0077b5',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/direstate',
      icon: FaInstagram,
      color: '#E4405F',
    },
  ];

  return (
    <div className={styles.socialIcons}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={social.name}
            title={social.name}
          >
            <Icon className={styles.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
