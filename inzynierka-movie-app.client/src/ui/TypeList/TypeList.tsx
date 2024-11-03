import { useMediaQuery } from "react-responsive";
import styles from "./TypeList.module.css";
import Select from "react-select";

function TypeList({ type }: { type?: string }) {
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
