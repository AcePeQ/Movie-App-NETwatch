import { Link } from "react-router-dom";

import styles from "./SearchItem.module.css";

function SearchItem() {
  return (
    <Link to="/" className={styles.movieItem}>
      <figure className={styles.posterContainer}>
        <img className={styles.poster} src="/public/poster.jpg" />
      </figure>
      <div className={styles.movieInformations}>
        <div>
          <p className={styles.title}>Flower of Evil</p>
          <div className={styles.movieTypes}>
            <span className={styles.yearAndtype}>2024, Movie</span>
            <div className={styles.rating}></div>
          </div>
        </div>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type...
        </p>
      </div>
    </Link>
  );
}

export default SearchItem;
