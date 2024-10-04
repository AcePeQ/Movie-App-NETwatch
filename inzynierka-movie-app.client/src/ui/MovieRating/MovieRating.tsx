import { HiMiniStar } from "react-icons/hi2";

import styles from "./MovieRating.module.css";

function MovieRating({ rating, type }: { rating: number; type?: string }) {
  return (
    <div className={styles.ratingContainer}>
      <HiMiniStar className={`${type ? styles[type] : ""}`} />
      <span className={`${styles.rating} ${type ? styles[type] : ""}`}>
        {rating?.toFixed(1)}
      </span>
    </div>
  );
}

export default MovieRating;
