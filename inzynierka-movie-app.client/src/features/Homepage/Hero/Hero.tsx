import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

import { HiMiniStar } from "react-icons/hi2";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <MovieItem />

        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotActive}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
}

function MovieItem() {
  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-50-100),
    var(--background-opacity-50-100)
  ), url("/public/shogun.jpg")`,
  };

  return (
    <div className={styles.heroItem} style={{ transform: `translateX(0%)` }}>
      <div className={styles.background} style={backgroundStyles}></div>
      <div className={styles.heroInformations}>
        <Link className={styles.movieLink} to="/">
          <h3 className={styles.title}>Shogun</h3>
          <div className={styles.ratingMovie}>
            <HiMiniStar />
            <span className={styles.rating}>9,5</span>
          </div>
          <div className={styles.genres}>
            <span className={styles.genre}>Action</span>
            <span className={styles.genre}>Adventure</span>
            <span className={styles.genre}>Horror</span>
          </div>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
