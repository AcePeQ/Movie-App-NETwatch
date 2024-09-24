import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { findGenreMovie } from "../../../../helpers/findGenre";

interface MovieItem {
  type: string;
  movie: object;
}

const BASE_BACKDROP_URL = `https://image.tmdb.org/t/p/original`;

function MovieItem({ type, movie }: MovieItem) {
  const {
    id,
    backdrop_path: backgroundPath,
    title,
    genre_ids: genres,
    vote_average: rating,
  } = movie;
  const background = `${BASE_BACKDROP_URL}${backgroundPath}`;

  const backgroundImage = { background: `url(${background})` };
  return (
    <Link
      className={`${styles.movieContainer} ${styles[type]}`}
      style={backgroundImage}
      to="movie/id"
    >
      <div className={styles.options}>
        <HiCog6Tooth />
      </div>

      <div className={styles.details}>
        <div className={styles.detailsHeader}>
          <p className={styles.title}>{title}</p>
          <MovieRating rating={rating} />
        </div>
        <div className={styles.genres}>
          <span className={styles.genre}>{findGenreMovie(genres[0])}</span>
          <span className={styles.genre}>{findGenreMovie(genres[1])}</span>
          <span className={styles.genre}>{findGenreMovie(genres[2])}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
