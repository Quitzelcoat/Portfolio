import React, { useState } from 'react';
import styles from './Typography.module.css';
import { colors } from '../../data/colorsData';
import { fonts } from '../../data/typographyData';

const TypographyPage: React.FC = () => {
  // index of the card that shows "Copied!" badge (or null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyHex = async (hex: string, idx: number) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(hex);
      } else {
        // fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = hex;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setCopiedIndex(idx);
      window.setTimeout(
        () => setCopiedIndex((current) => (current === idx ? null : current)),
        1500
      );
    } catch (err) {
      // optional: console.debug(err) or show different UI — keep minimal as requested
      console.error('Copy failed', err);
    }
  };

  return (
    <section id="typography" className={styles.typographySection}>
      <span className={styles.typoBgText}>DESIGN</span>

      <div className={styles.topLeftAccent}>
        <span className={styles.sectionLabel}>Typography & Colors</span>
        <span className={styles.sectionLine}></span>
      </div>

      <div className={styles.typographyBlock}>
        <h2 className={styles.heading}>Typography</h2>
        <div className={styles.fontsList}>
          {fonts.map((font, idx) => (
            <div className={styles.fontItem} key={font.name + idx}>
              <div className={styles.fontItemHeader}>
                <h3 className={styles.fontTitle}>{font.name}</h3>
                {font.usage && (
                  <span className={styles.fontUsage}>{font.usage}</span>
                )}
              </div>
              <p className={styles.fontDescription}>{font.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.colorBlock}>
        <div className={styles.colorHeaderRow}>
          <h2 className={styles.heading}>Color</h2>
          <p className={styles.colorDescription}>
            The selected color set ensures clarity, visual hierarchy, and a
            harmonious overall feel across the site.
          </p>
        </div>
      </div>

      <div className={styles.colorCardsScrollWrapper}>
        <div className={styles.colorCardsGrid}>
          {colors.map((color, idx) => (
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleCopyHex(color.hex, idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCopyHex(color.hex, idx);
                }
              }}
              aria-label={`Copy ${color.hex}`}
              className={styles.colorCard}
              key={color.hex}
              style={{
                background: color.hex,
                color: color.text,
                marginTop: idx === 0 ? '0' : idx % 2 === 1 ? '56px' : '-56px',
                zIndex: 10 - idx,
              }}
            >
              {/* Copied badge (only rendered when this card was copied recently) */}
              <div
                className={styles.copiedBadge}
                aria-hidden={copiedIndex !== idx}
                style={{ opacity: copiedIndex === idx ? 1 : 0 }}
              >
                Copied!
              </div>

              <div className={styles.cardContentBottom}>
                <div>
                  <div className={styles.cardRole}>{color.role}</div>
                  <div className={styles.cardHex}>{color.hex}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypographyPage;
