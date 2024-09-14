import { HiMiniCheckCircle } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi";

import styles from "./TabSeasons.module.css";
import Button from "../../Button/Button";
import { useState } from "react";

export default function TabSeasons() {
  return (
    <div className={styles.main}>
      <div className={styles.imageBox}>
        <img
          src="/public/shogunPoster.webp"
          alt="shogun"
          className={styles.image}
        />
      </div>

      <div className={styles.movieEpisodes}>
        <form className={styles.form}>
          <div className={styles.seasonsRows}>
            <SeasonRow />
            <SeasonRow />
            <SeasonRow />
            <SeasonRow />
          </div>

          <div className={styles.formBtns}>
            <Button size="medium" type="primary">
              Save Changes
            </Button>
            <Button size="small" type="delete">
              Delete
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SeasonRow() {
  const [rowOpen, setRowOpen] = useState(false);

  function handleRowStatus() {
    setRowOpen((status) => !status);
  }

  return (
    <div className={styles.episodesRow}>
      <div className={styles.rowHeader} onClick={handleRowStatus}>
        <p className={styles.rowTitle}>Season 1</p>
        <div className={styles.actions}>
          <p className={styles.episodesNumber}>0/30</p>
          <div className={styles.checkBox}>
            <HiMiniCheckCircle
              className={`${styles.icon} ${styles.iconCheck}`}
            />
          </div>
          {!rowOpen ? (
            <HiOutlineChevronDown
              className={`${styles.icon} ${styles.iconArrow}`}
            />
          ) : (
            <HiOutlineChevronUp
              className={`${styles.icon} ${styles.iconArrow}`}
            />
          )}
        </div>
      </div>

      <div
        className={`${styles.episodes} ${rowOpen ? styles.episodesActive : ""}`}
      >
        <div className={styles.episodeRow}>
          <img
            className={styles.episodeImage}
            src="/public/shogunPoster.webp"
          />
          <div className={styles.divBox}>
            <div className={styles.episodeInformations}>
              <p className={styles.episodeNum}>Episode 001</p>
              <p className={styles.episodeTitle}>Episode Title</p>
            </div>
            <HiMiniCheckCircle
              className={`${styles.icon} ${styles.iconCheck}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
