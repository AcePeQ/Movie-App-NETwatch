import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";

interface Item {
  backdrop_path: string;
  first_air_date: string | null;
  genre_ids: [];
  id: number;
  name: string | null;
  overview: string;
  poster_path: string;
  release_date: string | null;
  title: string | null;
  vote_average: number;
}

interface MovieItemProps {
  number: number;
  movie: Item;
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
