import styles from "./PersonHero.module.css";

import Button from "../../../ui/Button/Button";
import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import DetailRow from "../../Movie/MovieHero/DetailRow/DetailRow";
import getGender from "../../../helpers/getGender";
import { Person } from "../../../utils/types";

function PersonHero({ data }: { data: Person }) {
  const {
    name,
    birthday,
    deathday,
    gender,
    known_for_department,
    place_of_birth,
    profile_path: posterPath,
    biography,
  } = data;

  const genderName = getGender(gender);

  const birthdaySplit = birthday?.split("-").reverse().join("-");
  const deathdaySplit = deathday?.split("-").reverse().join("-");

  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-75-100),
    var(--background-opacity-50-100)
  )`,
  };

  return (
    <div className={styles.personHero} style={backgroundStyles}>
      <div className={styles.person}>
        <img
          className={styles.image}
          src={
            posterPath
              ? `${BASE_URL_W500}${posterPath}`
              : `/public/no-pic-ave.png`
          }
        />
        <div className={styles.informationsContainer}>
          <div className={styles.informationsHeader}>
            <p className={styles.person_name}>{name}</p>
          </div>

          <div className={styles.additionalInformationsContainer}>
            {genderName}, known for {known_for_department}
          </div>

          <div className={styles.detailsContainer}>
            <DetailRow title="Birthday">
              <p className={styles.detailValue}>{birthdaySplit}</p>
            </DetailRow>
            {deathday && (
              <DetailRow title="Deathday">
                <p className={styles.detailValue}>{deathdaySplit}</p>
              </DetailRow>
            )}
            <DetailRow title="Place of Birth">
              <p className={styles.detailValue}>{place_of_birth}</p>
            </DetailRow>
          </div>

          <p className={styles.biography}>{biography}</p>

          <div className={styles.buttons}>
            <Button size="medium" type="primary">
              Go back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonHero;
