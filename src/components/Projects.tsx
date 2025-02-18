import Image from 'next/image';

import styles from './components.module.scss';

const Projects = () => (
  <div className={styles.projects}>
    <h2>Personal/Side Projects</h2>
    <ul>
      <li>
        <a href="/parallax-demo">
          <Image
            src="/./images/prllx-icon.png"
            alt="Parralax demo icon"
            title="Parallas Demo"
            height="30"
            width="30"
          />
        </a>
      </li>
      <li>
        <a href="/rpg-battle">
          <Image
            src="/./images/sword-icon.png"
            alt="RPG Battle icon"
            title="RPG Battle"
            height="30"
            width="30"
            className={styles['pixel-image']}
          />
        </a>
      </li>
      <li>
        <a href="/dragon">
          <Image
            src="/./images/dragon-icon.png"
            alt="Dragon icon"
            title="Dragon demo"
            height="30"
            width="30"
          />
        </a>
      </li>
      <li>
        <a href="https://catherinegee.com/" target="_blank">
          <Image
            src="/./images/cg-logo.png"
            alt="Catherine Gee logo"
            title="Catherine Gee - Designer"
            height="30"
            width="30"
          />
        </a>
      </li>
    </ul>
  </div>
);

export default Projects;
