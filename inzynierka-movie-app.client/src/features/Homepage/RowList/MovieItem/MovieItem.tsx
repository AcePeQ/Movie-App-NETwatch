import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";

interface MovieItem {
  type: string;
}

function MovieItem({ type }: MovieItem) {
  const backgroundImage = { background: `url(/public/shogun.jpg)` };

  return (
    <Link
      className={`${styles.movieContainer} ${styles[type]}`}
      style={backgroundImage}
      to="movie/id"
    >
      <div className={styles.options}>
        <HiCog6Tooth />
      </div>

      <div className={styles.details}>
        <div className={styles.detailsHeader}>
          <p className={styles.title}>Shogun</p>
          <MovieRating />
        </div>
        <div className={styles.genres}>
          <span className={styles.genre}>Action</span>
          <span className={styles.genre}>Horror</span>
          <span className={styles.genre}>Adventures</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
