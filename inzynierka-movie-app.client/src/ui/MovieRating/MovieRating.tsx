import { HiMiniStar } from "react-icons/hi2";

import styles from "./MovieRating.module.css";

function MovieRating({ rating }: { rating: number }) {
  return (
    <div className={styles.ratingContainer}>
      <HiMiniStar />
      <span className={styles.rating}>{rating?.toFixed(1)}</span>
    </div>
  );
}

export default MovieRating;
