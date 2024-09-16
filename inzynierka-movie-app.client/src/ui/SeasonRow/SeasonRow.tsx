import { useState } from "react";
import styles from "./SeasonRow.module.css";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { HiMiniChevronUp } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";

export default function SeasonRow() {
  const [rowOpen, setRowOpen] = useState(false);

  function handleRowStatus() {
    setRowOpen((status) => !status);
  }

  return (
    <div className={styles.row}>
      <div className={styles.header} onClick={handleRowStatus}>
        <p className={styles.title}>Season 1</p>
        <div className={styles.actions}>
          <p className={styles.episodesNumber}>0/30</p>
          <div className={styles.checkBox}>
            <HiMiniCheckCircle
              className={`${styles.icon} ${styles.iconCheck}`}
            />
          </div>
          {!rowOpen ? (
            <HiMiniChevronDown
              className={`${styles.icon} ${styles.iconArrow}`}
            />
          ) : (
            <HiMiniChevronUp className={`${styles.icon} ${styles.iconArrow}`} />
          )}
        </div>
      </div>

      <div className={`${styles.episodes} ${rowOpen ? styles.active : ""}`}>
        <div className={styles.episodeRow}>
          <img className={styles.image} src="/public/shogunPoster.webp" />
          <div className={styles.episodeContainer}>
            <div className={styles.episode}>
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
