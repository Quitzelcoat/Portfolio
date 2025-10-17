// src/components/Footer.tsx
import React from 'react';
import footerStyles from '../styles/Footer.module.css';

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
