import { HiMiniStar } from "react-icons/hi2";

import styles from "./MovieRating.module.css";

function MovieRating() {
  return (
    <div className={styles.ratingContainer}>
      <HiMiniStar />
      <span className={styles.rating}>9,5</span>
    </div>
  );
}

export default MovieRating;
