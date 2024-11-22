import styles from "./TabSeasons.module.css";

import SeasonRow from "../../SeasonRow/SeasonRow";

export default function TabSeasons() {
  return (
    <div className={styles.seasons}>
      <form className={styles.form}>
        <div className={styles.rows}>
          <SeasonRow />
          <SeasonRow />
          <SeasonRow />
          <SeasonRow />
        </div>
      </form>
    </div>
  );
}
