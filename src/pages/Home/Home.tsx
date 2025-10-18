// src/pages/Home.tsx
import homeStyles from './Home.module.css';
import CommandSwitcher from '../../components/CommandCard/CommandSwitcher';
import { commandData } from '../../data/commandData';

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <div className={homeStyles.textContainerOne}>
        <h1 className={homeStyles.titleText}>Hello</h1>
        <p className={homeStyles.infoText}>Small Text</p>
      </div>

      <div className={homeStyles.textContainerTwo}>
        {/* Single switcher that shows one card at a time */}
        <CommandSwitcher data={commandData} defaultId={commandData[0]?.id} />
      </div>
    </section>
  );
};

export default Home;
