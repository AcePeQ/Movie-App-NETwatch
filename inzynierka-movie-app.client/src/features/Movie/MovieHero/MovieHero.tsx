import { HiMiniStar } from "react-icons/hi2";
import styles from "./MovieHero.module.css";

function MovieHero() {
  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-75-100),
    var(--background-opacity-50-100)
  ), url("/public/shogun.jpg")`,
  };

  return (
    <div className={styles.movieHero} style={backgroundStyles}>
      <div className={styles.hero}>
        <img className={styles.image} src="/public/shogunPoster.webp" />
        <div className={styles.informationsContainer}>
          <div className={styles.informationsHeader}>
            <p className={styles.title}>Shogun</p>
            <div className={styles.ratingBox}>
              <HiMiniStar />
              <span className={styles.rating}>9,5</span>
            </div>
            <span className={styles.totalRates}>(154k)</span>
          </div>
          <div className={styles.additionalInformationsContainer}>
            <p className={styles.additionalInformations}>
              Series - 2024 - 1 Season - Finished
            </p>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Your rating</p>
              <div className={styles.ratingBox}>
                <HiMiniStar />
                <span className={styles.rating}>9,5</span>
              </div>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Runtime</p>
              <p className={styles.detailValue}>59 min</p>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Age rating</p>
              <p className={styles.detailValue}>59 min</p>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Country</p>
              <p className={styles.detailValue}>US</p>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Genres</p>
              <p className={styles.detailValue}>Action, Historical, War</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;
