import React from 'react';
import marqueeStyles from './MarqueeSection.module.css';
import { marqueeData } from '../../data/marqueeData';

const MarqueeSection = () => {
  return (
    <section className={marqueeStyles.marqueeSection}>
      {marqueeData.map(({ direction, items }, idx) => (
        <div key={idx} className={marqueeStyles.marqueeRow}>
          {[...Array(2)].map((_, repeatIdx) => (
            <div
              key={repeatIdx}
              className={`${marqueeStyles.marqueeContent} ${marqueeStyles[direction]}`}
              aria-hidden={repeatIdx === 1}
            >
              {items.map((text, i) => (
                <React.Fragment key={`item-${i}`}>
                  <span>{text}</span>
                  {i < items.length - 1 && (
                    <span className={marqueeStyles.dot}>•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default MarqueeSection;
