import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";
import { ItemType } from "../../../../utils/types";
import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";

interface MovieItemProps {
  number: number;
  movie: ItemType;
}

function MovieItemTop({ number, movie }: MovieItemProps) {
  const { id, title, poster_path: backgroundPath } = movie;
  const background = `${BASE_URL_W500}${backgroundPath}`;
  const isMovie = title ? true : false;

  return (
    <Link
      className={styles.link}
      to={`${isMovie ? `/movie/${id}` : `/tv/${id}`}`}
    >
      <div className={styles.number} data-text={`${number}`}>
        {number}
      </div>
      <div className={styles.movie}>
        <img
          src={backgroundPath ? background : `/public/no-pic-ave.png`}
          className={styles.image}
          alt={`Poster of ${title}`}
        />

        <div className={styles.options}>
          {/* <HiCog6Tooth /> */}
          <HiPlusCircle />
        </div>
      </div>
    </Link>
  );
}

export default MovieItemTop;
