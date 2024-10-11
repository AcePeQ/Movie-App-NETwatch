import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import styles from "./Season.module.css";

function Season({ season }) {
  return (
    <div className={styles.season_container}>
      <img
        className={styles.image}
        src={`${BASE_URL_W500}${season.poster_path}`}
        alt={`${season.name} picture`}
      />
      <div className={styles.season}>
        <div className={styles.season_header}>
          <p className={styles.season_title}>
            {season.season_number === 0
              ? "Specials"
              : `${season.season_number} Season`}
          </p>
          <p className={styles.season_year}>{season.air_date?.split("-")[0]}</p>
        </div>
        <p className={styles.season_episodes}>
          {season.episode_count} Episodes
        </p>
      </div>
    </div>
  );
}

export default Season;
