import aboutStyles from './About.module.css';

const About = () => {
  return (
    <section className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.imgContainer}>
        <img
          src="https://res.cloudinary.com/dvuwl6nfi/image/upload/v1696222633/Portfolio/me_qr1v6w.jpg"
          alt="Portrait of Me"
        />
      </div>
      <article className={aboutStyles.aboutArticle}>
        <h2>My Story.</h2>
        <p>
          Hello! I'm [Your Name], a passionate web developer with a knack for
          creating dynamic and responsive web applications. My journey into web
          development began a few years ago when I discovered the power of
          coding to bring ideas to life on the internet.
        </p>
        <p>
          Over the years, I've honed my skills in various technologies including
          HTML, CSS, JavaScript, and popular frameworks like React and Node.js.
          I thrive on solving complex problems and continuously learning new
          tools and techniques to enhance my craft.
        </p>
        <p>
          When I'm not coding, I enjoy exploring the outdoors, reading tech
          blogs, and contributing to open-source projects. I'm excited to
          connect with like-minded individuals and collaborate on innovative
          projects that make a difference.
        </p>
        <p>
          When I'm not coding, I enjoy exploring the outdoors, reading tech
          blogs, and contributing to open-source projects. I'm excited to
          connect with like-minded individuals and collaborate on innovative
          projects that make a difference.
        </p>
        <p>
          When I'm not coding, I enjoy exploring the outdoors, reading tech
          blogs, and contributing to open-source projects. I'm excited to
          connect with like-minded individuals and collaborate on innovative
          projects that make a difference.
        </p>
        <p>
          When I'm not coding, I enjoy exploring the outdoors, reading tech
          blogs, and contributing to open-source projects. I'm excited to
          connect with like-minded individuals and collaborate on innovative
          projects that make a difference.
        </p>
        <p>
          Thank you for visiting my portfolio! Feel free to reach out if you'd
          like to work together or just want to say hello.
        </p>
      </article>
    </section>
  );
};

export default About;
