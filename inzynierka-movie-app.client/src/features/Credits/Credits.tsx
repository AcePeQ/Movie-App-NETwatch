import { Link, useNavigate } from "react-router-dom";
import styles from "./Credits.module.css";

import { HiMiniArrowLeftCircle } from "react-icons/hi2";
import { BASE_URL_W200 } from "../../helpers/getBaseUrl";
import { CastPerson, CrewPerson } from "./Person/Person";
import { Key } from "react";
import { Cast, Crew, Data } from "../../utils/types";

function Credits({ data, type }: { data: Data; type: string | undefined }) {
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

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header}>
          <Link className={styles.image_link} to={`/${type}/${id}`}>
            <img
              src={
                poster_path
                  ? `${BASE_URL_W200}${poster_path}`
                  : "/public/no-pic-ave.png"
              }
            />
          </Link>
          <div className={styles.single_column}>
            <Link className={styles.link} to={`/${type}/${id}`}>
              <h2>{name ? name : title}</h2>
            </Link>
            <button onClick={() => navigate(-1)} className={`${styles.button}`}>
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
            {cast.map((cast: Cast) => (
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
              {directors.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {directors.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Writer</h4>
              {writers.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {writers.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Production</h4>
              {production.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {production.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Sound</h4>
              {sound.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {sound.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Costume & Make-up</h4>
              {makeup.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {makeup.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Art</h4>
              {artists.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {artists.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Editors</h4>
              {editors.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {editors.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Camera</h4>
              {camerasman.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
              ))}
              {camerasman.length === 0 && (
                <p className={styles.errorLength}>There are no records</p>
              )}
            </ul>

            <ul className={styles.crew_type_list}>
              <h4 className={styles.crew_type_title}>Visual Effects</h4>
              {effects.map((crew: Crew, index: Key | null | undefined) => (
                <CrewPerson key={index} crew={crew} />
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
