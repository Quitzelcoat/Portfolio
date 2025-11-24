import styles from './Typography.module.css';
import { colors } from '../../data/colorsData';
import { fonts } from '../../data/typographyData';

const TypographyPage = () => (
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
            className={styles.colorCard}
            key={color.hex}
            style={{
              background: color.hex,
              color: color.text,
              marginTop: idx === 0 ? '0' : idx % 2 === 1 ? '56px' : '-56px',
              zIndex: 10 - idx,
            }}
          >
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

export default TypographyPage;
