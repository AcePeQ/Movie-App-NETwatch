import styles from "./TabInformations.module.css";

import MovieRating from "../../MovieRating/MovieRating";
import Select from "react-select";
import Button from "../../Button/Button";

const statusOptions = [
  { value: "currentWatching", label: "Current Watching" },
  { value: "completed", label: "Completed" },
  { value: "planToWatch", label: "Plan to Watch" },
  { value: "onHold", label: "On Hold" },
  { value: "dropped", label: "Dropped" },
];

function TabInformations() {
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
            <MovieRating />
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

export default TabInformations;
