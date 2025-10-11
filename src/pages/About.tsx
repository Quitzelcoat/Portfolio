import aboutStyles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={aboutStyles.aboutContainer}>
      <article className={aboutStyles.aboutArticle}>
        <div className={aboutStyles.aboutImgContainer}>
          <h4>Img round will go here</h4>
          <h6>Name here</h6>
          <button>contact btn here</button>
        </div>
        <div className={aboutStyles.aboutInfoContainer}>
          <div className={aboutStyles.bioContainer}>
            <h3>Bio</h3>
            <p>
              This is the about page of the portfolio. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Atque molestiae quidem
              excepturi inventore perferendis itaque tempora architecto autem ex
              tenetur enim ipsa, dolorum porro omnis!
            </p>
          </div>
          <div className={aboutStyles.cardsContainer}>
            <div>Education Card</div>
            <div>Experience Card</div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
