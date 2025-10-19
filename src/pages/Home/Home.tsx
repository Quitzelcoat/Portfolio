import homeStyles from './Home.module.css';
import CommandSwitcher from '../../components/CommandCard/CommandSwitcher';
import AnimatedHello from '../../components/AnimatedHello/AnimatedHello';
import { commandData } from '../../data/commandData';
import DotsOverlay from '../../components/DotsOverlay/DotsOverlay';
import VerticalLine from '../../components/VerticalLine/VerticalLine';

const Home: React.FC = () => {
  return (
    <section className={homeStyles.home}>
      <DotsOverlay />
      <VerticalLine topLabel="Web Developer" />
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
