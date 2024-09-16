import styles from "./TabSeasons.module.css";

import Button from "../../Button/Button";
import SeasonRow from "../../SeasonRow/SeasonRow";

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

      <div className={styles.seasons}>
        <form className={styles.form}>
          <div className={styles.rows}>
            <SeasonRow />
            <SeasonRow />
            <SeasonRow />
            <SeasonRow />
          </div>

          <div className={styles.buttons}>
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
