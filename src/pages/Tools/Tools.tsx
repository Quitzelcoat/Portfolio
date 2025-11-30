import toolStyle from './Tools.module.css';
import { toolsData } from '../../data/toolsData';

type ToolKey = keyof typeof toolsData;

const cardList: { key: ToolKey; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'misc', label: 'Miscellaneous' },
];

const Tools = () => (
  <section id="tools" className={toolStyle.toolSection}>
    <span className={toolStyle.toolsBgText}>SKILLS</span>
    <div className={toolStyle.topLeftAccent}>
      <span className={toolStyle.sectionLabel}>Tools & Skills</span>
      <span className={toolStyle.sectionLine}></span>
    </div>
    <article className={toolStyle.toolsGrid}>
      {cardList.map((card) => (
        <div className={toolStyle.toolCard} key={card.label}>
          <h3>{card.label}</h3>
          <div className={toolStyle.skillsGrid}>
            {toolsData[card.key].map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div className={toolStyle.skillBox} key={skill.name}>
                  <IconComponent
                    className={toolStyle.skillIcon}
                    aria-label={skill.name + ' icon'}
                    title={skill.name}
                  />
                  <span className={toolStyle.skillName}>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </article>
    <div className={toolStyle.letsMeetContainer}>
      <button className={toolStyle.letsMeetBtn}>Let's Meet</button>
    </div>
  </section>
);

export default Tools;
