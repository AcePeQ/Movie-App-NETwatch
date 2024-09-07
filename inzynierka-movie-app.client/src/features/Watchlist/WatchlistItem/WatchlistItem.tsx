import { Link } from "react-router-dom";

import styles from "./WatchlistItem.module.css";
import { HiMiniStar, HiCog6Tooth } from "react-icons/hi2";

function WatchlistItem() {
  const backgroundImage = { background: `url(/public/shogun.jpg)` };

  return (
    <Link className={styles.movieBox} style={backgroundImage} to="/">
      <div className={styles.movieOptions}>
        <HiCog6Tooth />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.movieDetails}>
          <div className={styles.upperBox}>
            <p className={styles.title}>Shogun</p>
            <div className={styles.ratingBox}>
              <HiMiniStar />
              <span className={styles.rating}>9,5</span>
            </div>
          </div>
          <div className={styles.genres}>
            <span className={styles.genre}>Action</span>
            <span className={styles.genre}>Horror</span>
            <span className={styles.genre}>Adventures</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default WatchlistItem;