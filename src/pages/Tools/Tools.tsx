import toolStyle from './Tools.module.css';
import { toolsData } from '../../data/toolsData';

const cardList: { key: keyof typeof toolsData; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'misc', label: 'Miscellaneous' },
];

const Tools = () => (
  <section id="tools" className={toolStyle.toolSection}>
    <div className={toolStyle.topLeftAccent}>
      <span className={toolStyle.sectionLabel}>Tools & Skills</span>
      <span className={toolStyle.sectionLine}></span>
    </div>
    <article className={toolStyle.toolsGrid}>
      {cardList.map((card) => (
        <div className={toolStyle.toolCard} key={card.label}>
          <h3>{card.label}</h3>
          <ul>
            {toolsData[card.key].map((skill) => (
              <li key={skill.name}>
                <img
                  src={skill.icon}
                  alt={skill.name + ' icon'}
                  className={toolStyle.skillIcon}
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  </section>
);

export default Tools;
