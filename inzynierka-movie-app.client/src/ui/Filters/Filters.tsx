import ReactSlider from "react-slider";

import styles from "./Filters.module.css";

import Filter from "./Filter/Filter";

function Filters() {
  return (
    <div className={styles.filters}>
      <Filter title="Year">
        <div className={`${styles.filter} ${styles.filterYear}`}>
          <ReactSlider
            className="horizontal-slider-years"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            defaultValue={[1890, 2024]}
            min={1890}
            max={2024}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={0}
          />
        </div>
      </Filter>
      <Filter title="Rating">
        <div className={`${styles.filter} ${styles.filterRating}`}>
          <ReactSlider
            className="horizontal-slider-rating"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            markClassName="slider-mark"
            defaultValue={[0, 10]}
            marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            min={1}
            max={10}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={0}
          />
        </div>
      </Filter>
      <Filter title="Genres">
        <div className={`${styles.filter} ${styles.filterGenres}`}>
          <ReactSlider
            className="horizontal-slider-genres"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            markClassName="slider-mark"
            defaultValue={[0, 10]}
            marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            min={1}
            max={10}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={0}
          />
        </div>
      </Filter>
    </div>
  );
}

export default Filters;
