import { BASE_URL_W200 } from "../../../helpers/getBaseUrl";
import styles from "./Person.module.css";

import { Link } from "react-router-dom";

export function CrewPerson({ crew }) {
  return (
    <li className={styles.item_list}>
      <Link className={styles.person} to={""}>
        {crew.profile_path && (
          <img src={`${BASE_URL_W200}${crew.profile_path}`} />
        )}
        <div className={styles.person_details}>
          <p className={styles.person_name}>{crew.name}</p>
          <div className={styles.person_character}>
            {crew.job && crew.job}
            {crew.jobs && (
              <>
                {crew.jobs.map((job) => (
                  <p key={job.job} className={styles.role}>
                    {job.job} ({job.episode_count} Episodes)
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}

export function CastPerson({ cast }) {
  return (
    <li className={styles.item_list}>
      <Link className={styles.person} to={""}>
        {cast.profile_path && (
          <img src={`${BASE_URL_W200}${cast.profile_path}`} />
        )}
        <div className={styles.person_details}>
          <p className={styles.person_name}>{cast.name}</p>
          <div className={styles.person_character}>
            {cast.character && cast.character}
            {cast.roles && (
              <>
                {cast.roles.map((role) => (
                  <p key={role.character} className={styles.role}>
                    {role.character} ({role.episode_count} Episodes)
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}