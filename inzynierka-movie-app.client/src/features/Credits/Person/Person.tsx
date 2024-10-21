import { BASE_URL_W200 } from "../../../helpers/getBaseUrl";
import styles from "./Person.module.css";

import { Link } from "react-router-dom";
import { Cast, Crew } from "../../../utils/types";

export function CrewPerson({ crew }: { crew: Crew }) {
  return (
    <li className={styles.item_list}>
      <Link className={styles.person} to={`/person/${crew.id}`}>
        <img
          src={
            crew.profile_path
              ? `${BASE_URL_W200}${crew.profile_path}`
              : "/public/no-pic-ave.png"
          }
          alt={`Photo of ${crew.name}`}
        />
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

export function CastPerson({ cast }: { cast: Cast }) {
  return (
    <li className={styles.item_list}>
      <Link className={styles.person} to={`/person/${cast.id}`}>
        <img
          src={
            cast.profile_path
              ? `${BASE_URL_W200}${cast.profile_path}`
              : "/public/no-pic-ave.png"
          }
          alt={`Photo of ${cast.name}`}
        />
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
