import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Filter from "./Filter/Filter";
import styles from "./Filters.module.css";
import { useState } from "react";

function Filters() {
  const [yearFilter, setYearFiler] = useState([1890, 2024]);

  return (
    <div className={styles.filters}>
      <Filter title="Year">
        <div className={`${styles.filterContainer} ${styles.filterYear}`}>
          <Slider range min={1890} max={2024} value={[...yearFilter]} />
        </div>
      </Filter>
      <Filter title="Rating">
        <div className={`${styles.filterContainer} ${styles.filterRating}`}>
          Elo
        </div>
      </Filter>
      <Filter title="Genres">
        <div className={`${styles.filterContainer} ${styles.filterGenres}`}>
          Elo
        </div>
      </Filter>
    </div>
  );
}

export default Filters;
