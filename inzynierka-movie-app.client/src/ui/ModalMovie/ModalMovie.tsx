import { MouseEventHandler, useState } from "react";
import styles from "./ModalMovie.module.css";

import { HiX } from "react-icons/hi";
import { createPortal } from "react-dom";
import { HiMiniStar } from "react-icons/hi2";

import Select from "react-select";
import Button from "../Button/Button";

const statusOptions = [
  { value: "currentWatching", label: "Current Watching" },
  { value: "completed", label: "Completed" },
  { value: "planToWatch", label: "Plan to Watch" },
  { value: "onHold", label: "On Hold" },
  { value: "dropped", label: "Dropped" },
];

interface ModalProps {
  onClose?: MouseEventHandler;
}

function ModalMovie({ onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState(0);

  function handleChangeTab() {
    setActiveTab(activeTab === 0 ? 1 : 0);
  }

  return createPortal(
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.tabs}>
            <button
              onClick={handleChangeTab}
              className={`${styles.btn} ${
                activeTab === 0 ? styles.active : ""
              }`}
            >
              Informations
            </button>

            <button
              onClick={handleChangeTab}
              className={`${styles.btn} ${
                activeTab === 1 ? styles.active : ""
              }`}
            >
              Episodes
            </button>
          </div>
          <button onClick={onClose} className={styles.btnClose}>
            <HiX className={styles.iconClose} />
          </button>
        </div>

        {activeTab === 0 && <InformationsTab />}
        {activeTab === 1 && <EpisodesTab />}
      </div>
    </div>,
    document.body
  );
}

function InformationsTab() {
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        text: `var(--text-100)`,
        primary50: `var(--accent-200)`,
        primary25: `var(--background-300)`,
        primary: `var(--accent-100)`,
        neutral0: `var(--background-200)`,
        neutral10: `var(--background-200)`,
        neutral80: `var(--text-100)`,
      },
    };
  }

  const customStyles = {
    control: (styles) => ({
      ...styles,
      border: "none",
      padding: "0.25rem 0.5rem",
      outline: "none",
      cursor: `pointer`,
      transition: `var(--transition-all)`,
      boxShadow: "0",
      ":hover": {
        backgroundColor: `var(--background-300)`,
      },
      ":active": {
        border: "none",
      },
    }),
    option: (styles) => ({
      ...styles,
      cursor: "pointer",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: `var(--accent-100)`,

      ":hover": {
        color: `var(--accent-100)`,
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      backgroundColor: `var(--accent-100)`,
      width: "2px",

      ":hover": {
        backgroundColor: `var(--accent-100)`,
      },
    }),
  };

  return (
    <div className={styles.main}>
      <div className={styles.imageBox}>
        <img
          src="/public/shogunPoster.webp"
          alt="shogun"
          className={styles.image}
        />
      </div>

      <div className={styles.movieInformations}>
        <div className={styles.details}>
          <p className={styles.title}>Shogun</p>
          <p className={styles.informations}>
            Series - Action, Adventure, Horror
          </p>

          <div className={styles.scoreAndYearBox}>
            <div className={styles.ratingBox}>
              <HiMiniStar />
              <span className={styles.rating}>9,5</span>
            </div>
            <p className={styles.year}>2024</p>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <p className={styles.formOptionName}>Status</p>
            <div className={styles.formOptionOption}>
              <Select
                theme={customTheme}
                styles={customStyles}
                isSearchable={false}
                options={statusOptions}
                defaultValue={statusOptions[0]}
                className={styles.selectContainer}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <p className={styles.formOptionName}>Episodes Watched</p>
          </div>

          <div className={styles.formRow}>
            <p className={styles.formOptionName}>Overall Rating</p>
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

import { HiMiniCheckCircle } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi";

function EpisodesTab() {
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

export default ModalMovie;
