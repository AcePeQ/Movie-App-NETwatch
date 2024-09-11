import { HiMiniStar } from "react-icons/hi2";
import styles from "./MovieHero.module.css";
import Button from "../../../ui/Button/Button";

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
          </div>
          <div className={styles.additionalInformationsContainer}>
            <p className={styles.additionalInformations}>
              Series - 2024 - 1 Season - Finished
            </p>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Rating</p>
              <div className={styles.ratingBox}>
                <HiMiniStar />
                <span className={styles.rating}>9,5</span>
              </div>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Your rating</p>
              <div className={styles.ratingBox}>
                <HiMiniStar />
                <span className={styles.rating}>9,5</span>
                <span className={styles.totalRates}>(154k)</span>
              </div>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Runtime</p>
              <p className={styles.detailValue}>59 min</p>
            </div>
            <div className={styles.detailRow}>
              <p className={styles.detailTitle}>Age rating</p>
              <p className={styles.detailValue}>+18</p>
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

          <p className={styles.description}>
            „Shogun” to opowieść, która ukazuje nastroje panujące w Japonii w
            1600 roku. To wówczas kraj bez centralnej władzy, brodzący na
            przełomie okresów Sengoku (walczących prowincji) i Edo, w którym
            obejmujący władzę ród miał wyznaczyć kierunek kraju na następne
            dwieście lat.
          </p>

          <div className={styles.buttons}>
            <Button size="medium" type="primary">
              Add to list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;
