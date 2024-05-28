import styles from './components.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <h1>Will Ashe</h1>
    <h2>
      Software Engineer
      <br />
      Austin, TX
    </h2>

    <div className={styles['contact-info']}>
      <a
        href="http://www.linkedin.com/in/will-ashe"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/willashe"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
);

export default Hero;
