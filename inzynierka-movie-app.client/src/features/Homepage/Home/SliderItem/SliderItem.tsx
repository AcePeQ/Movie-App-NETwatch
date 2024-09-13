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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SliderItem;
