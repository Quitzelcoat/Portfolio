import homeStyles from './Home.module.css';
import CommandCard from '../../components/CommandCard/CommandCard';

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <div className={homeStyles.textContainerOne}>
        <h1 className={homeStyles.titleText}>Hello</h1>
        <p className={homeStyles.infoText}>Small Text</p>
      </div>
      <div className={homeStyles.textContainerTwo}>
        <CommandCard
          initialLines={[
            'npx create-portfolio --template minimal',
            'cd portfolio',
            'npm run dev',
          ]}
        />
      </div>
    </section>
  );
};

export default Home;
