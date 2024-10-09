import styles from "./MovieRating.module.css";

import { HiStar } from "react-icons/hi";

function MovieRating({ rating, type }: { rating: number; type?: string }) {
  return (
    <div className={styles.ratingContainer}>
      <HiStar className={`${type ? styles[type] : ""}`} />
      <p className={`${styles.rating} ${type ? styles[type] : ""}`}>
        {rating?.toFixed(1)}
      </p>
    </div>
  );
}

export default MovieRating;
