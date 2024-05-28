import Image from 'next/image';

import styles from './components.module.scss';

const Projects = () => (
  <div className={styles.projects}>
    <h2>Personal/Side Projects</h2>
    <ul>
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
    </ul>
  </div>
);

export default Projects;
