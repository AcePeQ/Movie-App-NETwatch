import styles from "./UserScore.module.css";

import { GiStarsStack } from "react-icons/gi";

function UserScore({ rating, type }: { rating: number; type?: string }) {
  return (
    <div className={styles.ratingContainer}>
      <GiStarsStack className={`${type ? styles[type] : ""}`} />
      <p className={`${styles.rating} ${type ? styles[type] : ""}`}>
        {rating ? rating : 0}
      </p>
    </div>
  );
}

export default UserScore;
