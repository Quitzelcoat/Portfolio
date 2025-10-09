import homeStyles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <div className={homeStyles.textContainerOne}>
        <h1 className={homeStyles.titleText}>Hello</h1>
        <p className={homeStyles.infoText}>Small Text</p>
      </div>
      <div className={homeStyles.textContainerTwo}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure eum
          optio architecto molestiae, voluptatum ducimus aperiam ipsam iusto.
          Atque nihil totam quia possimus officiis.
        </p>
      </div>
    </section>
  );
};

export default Home;
