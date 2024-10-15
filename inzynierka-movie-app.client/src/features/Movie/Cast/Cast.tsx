import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import styles from "./Cast.module.css";

type CastType = {
  profile_path: string;
  name: string;
  character: string;
  known_for_department: string;
  id: number;
  roles: Role[];
};

interface Role {
  character: string;
}

function Cast({ cast }: { cast: CastType }) {
  const { profile_path, character, name, roles } = cast;

  return (
    <div className={styles.cast_container}>
      <img
        src={`${BASE_URL_W500}${profile_path}`}
        alt={`${name} photo of character ${character}`}
        className={styles.cast_image}
      />
      <div className={styles.cast}>
        <p className={styles.cast_character}>{character}</p>
        <p className={styles.cast_name}>{name}</p>
      </div>
    </div>
  );
}

export default Cast;
