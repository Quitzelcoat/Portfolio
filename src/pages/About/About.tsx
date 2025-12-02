import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutStyles from './About.module.css';

const About: React.FC = () => {
  const imgRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const lineY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const bgTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.02, 0.06, 0.02]
  );

  return (
    <section id="about" className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutTopRight}>
        <span className={aboutStyles.aboutLabel}>About</span>
        <span className={aboutStyles.aboutLine}></span>
      </div>

      <motion.span
        className={aboutStyles.aboutBgText}
        style={{ y: bgTextY, opacity: bgTextOpacity }}
        aria-hidden="true"
      >
        ABOUT
      </motion.span>

      <div ref={imgRef} className={aboutStyles.imgContainer}>
        <motion.div
          className={aboutStyles.imgLine}
          style={{ y: lineY }}
          aria-hidden="true"
        />
        <motion.img
          src="/images/louvre.jpg"
          alt="Portrait of Me"
          className={aboutStyles.img}
          style={{ y: imgY }}
        />
      </div>

      <motion.article
        className={aboutStyles.aboutArticle}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2>
          My Story<span className={aboutStyles.aboutDot}>.</span>
        </h2>
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
      </motion.article>
    </section>
  );
};

export default About;
