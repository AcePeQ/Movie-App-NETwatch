import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import { CastType } from "../../../utils/types";
import styles from "./Cast.module.css";

function Cast({ cast }: { cast: CastType }) {
  const { profile_path, character, name } = cast;

  return (
    <div className={styles.cast_container}>
      {profile_path ? (
        <img
          src={`${BASE_URL_W500}${profile_path}`}
          alt={`${name} photo of character ${character}`}
          className={styles.cast_image}
        />
      ) : (
        <img
          src={`/public/no-pic-ave.png`}
          alt="No photo available"
          className={styles.cast_image}
        />
      )}
      <div className={styles.cast}>
        <p className={styles.cast_character}>{character}</p>
        <p className={styles.cast_name}>{name}</p>
      </div>
    </div>
  );
}

export default Cast;
