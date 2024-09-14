import { Link } from "react-router-dom";

import styles from "./WatchlistItem.module.css";
import { HiMiniStar, HiCog6Tooth } from "react-icons/hi2";
import { useState } from "react";
import ModalMovie from "../../../ui/ModalMovie/ModalMovie";
import MovieRating from "../../../ui/MovieRating/MovieRating";

function WatchlistItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const backgroundImage = { background: `url(/public/shogun.jpg)` };

  function handleOpenModal(e) {
    e.preventDefault();

    setIsModalOpen(true);
  }

  function handleCloseModal(e) {
    e.preventDefault();
    setIsModalOpen(false);
  }

  return (
    <Link className={styles.movieLink} style={backgroundImage} to="/">
      <div className={styles.options} onClick={handleOpenModal}>
        <HiCog6Tooth />
      </div>

      <div className={styles.details}>
        <div className={styles.movieDetails}>
          <div className={styles.header}>
            <p className={styles.title}>Shogun</p>
            <MovieRating />
          </div>
          <div className={styles.genres}>
            <span className={styles.genre}>Action</span>
            <span className={styles.genre}>Horror</span>
            <span className={styles.genre}>Adventures</span>
          </div>
        </div>
      </div>

      {isModalOpen && <ModalMovie onClose={handleCloseModal} />}
    </Link>
  );
}

export default WatchlistItem;
