import { useMediaQuery } from "react-responsive";
import styles from "./TypeList.module.css";
import Select from "react-select";

const typesOptions = [
  { value: "all", label: "All" },
  { value: "movies", label: "Movies" },
  { value: "series", label: "Series" },
];

const sortOptions = [
  { value: "alphabetic", label: "Alphabetic" },
  { value: "rating", label: "Rating" },
  { value: "year", label: "Year" },
];

const listOptions = [
  { value: "all", label: "All Movies & Series" },
  { value: "current", label: "Current Watching" },
  { value: "completed", label: "Completed" },
  { value: "planToWatch", label: "Plan To Watch" },
  { value: "onHold", label: "On Hold" },
  { value: "dropped", label: "Dropped" },
];

function TypeList({ type }: { type?: string }) {
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
      display: "none",
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: "100000",
    }),
  };

  const isMediumDisplay = useMediaQuery({
    query: "(max-width: 1125px)",
  });

  return (
    <div className={styles.types}>
      {isMediumDisplay && type === "watchlist" ? (
        <div className={styles.filters}>
          <div className={styles.type}>
            <Select
              theme={customTheme}
              styles={customStyles}
              isSearchable={false}
              options={typesOptions}
              defaultValue={typesOptions[0]}
              className={styles.selectContainer}
            />
          </div>

          <div className={styles.watchlist}>
            <Select
              theme={customTheme}
              styles={customStyles}
              isSearchable={false}
              options={listOptions}
              defaultValue={listOptions[0]}
              className={styles.selectContainer}
            />
          </div>
        </div>
      ) : (
        <div className={styles.type}>
          <Select
            theme={customTheme}
            styles={customStyles}
            isSearchable={false}
            options={typesOptions}
            defaultValue={typesOptions[0]}
            className={styles.selectContainer}
          />
        </div>
      )}
      <div className={styles.sort}>
        <p className={styles.sortedBy}>Sorted by</p>
        <Select
          theme={customTheme}
          styles={customStyles}
          isSearchable={false}
          options={sortOptions}
          defaultValue={sortOptions[0]}
          className={styles.selectContainer}
        />
      </div>
    </div>
  );
}

export default TypeList;
