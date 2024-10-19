import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";
import { ItemType } from "../../../../utils/types";

interface MovieItemProps {
  number: number;
  movie: ItemType;
}

const BASE_BACKDROP_URL = `https://image.tmdb.org/t/p/original`;

function MovieItemTop({ number, movie }: MovieItemProps) {
  const { id, title, poster_path: backgroundPath } = movie;
  const background = `${BASE_BACKDROP_URL}${backgroundPath}`;

  const isMovie = title ? true : false;

  return (
    <Link
      className={styles.link}
      to={`${isMovie ? `/movie/${id}` : `/tv/${id}`}`}
    >
      <div className={styles.number}>{number}</div>
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
