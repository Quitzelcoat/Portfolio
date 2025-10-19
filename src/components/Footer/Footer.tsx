import footerStyles from './Footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p>© {year} Haris Saeed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
