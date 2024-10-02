import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import styles from "./Cast.module.css";

function Cast({ cast }) {
  return (
    <div className={styles.cast_container}>
      <img
        src={`${BASE_URL_W500}${cast.profile_path}`}
        alt={`${cast.name} photo of character ${cast.character}`}
        className={styles.cast_image}
      />
      <div className={styles.cast}>
        <p className={styles.cast_character}>{cast.character}</p>
        <p className={styles.cast_name}>{cast.name}</p>
      </div>
    </div>
  );
}

export default Cast;
