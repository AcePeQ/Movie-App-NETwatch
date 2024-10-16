import { Link } from "react-router-dom";
import styles from "./Credits.module.css";

import { HiMiniArrowLeftCircle } from "react-icons/hi2";
import { BASE_URL_W200 } from "../../helpers/getBaseUrl";
import { CastPerson, CrewPerson } from "./Person/Person";

interface Data {
  credits: Credits;
  details: Details;
}

interface Details {
  poster_path: string;
  id: number;
  release_date: string;
  first_air_date: string;
  name: string;
  title: string;
}

interface Credits {
  cast: Cast;
  crew: Crew;
}

interface Cast {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
  roles: Role[];
}

interface Crew {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  jobs: Job[];
  job: string;
  department: string;
}

interface Role {
  character: string;
  episode_count: number;
  total_episode_count: number;
}

interface Job {
  job: string;
  episode_count: number;
}

function Credits({ data }: { data: Data }) {
  const { id, name, poster_path, title } = data.details;
  const { cast, crew } = data.credits;

  const directors = crew.filter((person) => person.department === "Directing");

  const writers = crew.filter((person) => person.department === "Writing");

  const sound = crew.filter((person) => person.department === "Sound");

  const production = crew.filter(
    (person) => person.department === "Production"
  );

  const makeup = crew.filter(
    (person) => person.department === "Costume & Make-up"
  );

  const camerasman = crew.filter((person) => person.department === "Camera");

  const editors = crew.filter((person) => person.department === "Editing");

  const artists = crew.filter((person) => person.department === "Art");

  const effects = crew.filter(
    (person) => person.department === "Visual Effects"
  );

  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header}>
          <Link className={styles.image_link} to={""}>
            <img src={`${BASE_URL_W200}${poster_path}`} />
          </Link>
          <div className={styles.single_column}>
            <Link className={styles.link} to={""}>
              <h2>{name ? name : title}</h2>
            </Link>
            <button className={`${styles.button} ${styles.btn}`}>
              <HiMiniArrowLeftCircle className={styles.icon} />
              <p>Go back</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.main_wrapper}>
        <div className={styles.main}>
          <ul className={`${styles.column} ${styles.cast}`}>
            <h3 className={styles.column_title}>
              Cast <span className={styles.count}>{cast.length}</span>
            </h3>
            {cast.map((cast) => (
              <CastPerson key={cast.id} cast={cast} />
            ))}
            {cast.length === 0 && (
              <p className={styles.errorLength}>There are no cast records</p>
            )}
          </ul>

          <ul className={`${styles.column} ${styles.crew}`}>
            <h3 className={styles.column_title}>
              Crew <span className={styles.count}>{crew.length}</span>
            </h3>
            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Directing</h4>
              {directors.map((crew, index) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {directors.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Writer</h4>
              {writers.map((crew, index) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {writers.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Production</h4>
              {production.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {production.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Sound</h4>
              {sound.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {sound.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Costume & Make-up</h4>
              {makeup.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {makeup.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Art</h4>
              {artists.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {artists.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Editors</h4>
              {editors.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {editors.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Camera</h4>
              {camerasman.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {camerasman.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Visual Effects</h4>
              {effects.map((crew) => (
                <CrewPerson key={crew.id} crew={crew} />
              ))}
              {effects.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Credits;