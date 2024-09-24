import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";

interface MovieItemProps {
  number: string;
  movie: object;
}

const BASE_BACKDROP_URL = `https://image.tmdb.org/t/p/original`;

function MovieItemTop({ number, movie }: MovieItemProps) {
  const { id, poster_path: backgroundPath } = movie;
  const background = `${BASE_BACKDROP_URL}${backgroundPath}`;

  return (
    <Link className={styles.link} to="/">
      <div className={styles.number}>{number}</div>
      <div className={styles.movie}>
        <img src={background} className={styles.image} />
        <div className={styles.options}>
          {/* <HiCog6Tooth /> */}
          <HiPlusCircle />
        </div>
      </div>
    </Link>
  );
}

export default MovieItemTop;
