import React from 'react';
import homeStyles from './Home.module.css';
import CommandSwitcher from '../../components/CommandCard/CommandSwitcher';
import AnimatedHello from '../../components/AnimatedHello/AnimatedHello';
import { commandData } from '../../data/commandData';

const Home: React.FC = () => {
  return (
    <section className={homeStyles.home}>
      <div className={homeStyles.textContainerOne}>
        <h1 className={homeStyles.titleText}>
          <AnimatedHello />
        </h1>

        {/* DO NOT CHANGE THIS TEXT */}
        <p className={homeStyles.infoText}>
          It’s <span>Haris S</span>, the Code Conjurer!
        </p>
      </div>

      <div className={homeStyles.textContainerTwo}>
        <CommandSwitcher data={commandData} defaultId={commandData[0]?.id} />
      </div>
    </section>
  );
};

export default Home;
