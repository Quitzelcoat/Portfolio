import toolStyle from './Tools.module.css';

const Tools = () => {
  return (
    <section id="tools" className={toolStyle.toolSection}>
      <h2>Tools & Skills</h2>

      <article className={toolStyle.toolsGrid}>
        <div className={toolStyle.toolItem}>
          <h3>Frontend</h3>
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Tailwind CSS</p>
            <p>Bootstrap</p>
            <p>Sass</p>
            <p>Figma</p>
          </div>
        </div>

        <div className={toolStyle.toolItem}>
          <h3>Backend</h3>
          <div>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>PostgreSQL</p>
            <p>Firebase</p>
            <p>RESTful APIs</p>
            <p>GraphQL</p>
            <p>Python</p>
            <p>Django</p>
            <p>Flask</p>
          </div>
        </div>

        <div className={toolStyle.toolItem}>
          <h3>Miscellaneous</h3>
          <div>
            <p>Git & GitHub</p>
            <p>Docker</p>
            <p>Jest</p>
            <p>Mocha & Chai</p>
            <p>Agile & Scrum</p>
            <p>CI/CD</p>
            <p>Linux</p>
            <p>Webpack</p>
            <p>SEO Basics</p>
            <p>Unit Testing</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Tools;
