import { Link } from "react-router-dom";
import styles from "./SliderItem.module.css";

import MovieRating from "../../../../ui/MovieRating/MovieRating";

function SliderItem() {
  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-50-100),
    var(--background-opacity-50-100)
  ), url("/public/shogun.jpg")`,
  };

  return (
    <div className={styles.sliderItem} style={{ transform: `translateX(0%)` }}>
      <div className={styles.background} style={backgroundStyles}></div>
      <div className={styles.item}>
        <Link className={styles.link} to="/">
          <h3 className={styles.title}>Shogun</h3>
          <div className={styles.ratingMovie}>
            <MovieRating />
            <span className={styles.date}>2024</span>
          </div>
          <div className={styles.genres}>
            <span className={styles.genre}>Action</span>
            <span className={styles.genre}>Adventure</span>
            <span className={styles.genre}>Horror</span>
          </div>
          <p className={styles.description}>
            In Japan in the year 1600, at the dawn of a century-defining civil
            war, Lord Yoshii Toranaga is fighting for his life as his enemies on
            the Council of Regents unite against him, when a mysterious European
            ship is found marooned in a nearby fishing village.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SliderItem;
