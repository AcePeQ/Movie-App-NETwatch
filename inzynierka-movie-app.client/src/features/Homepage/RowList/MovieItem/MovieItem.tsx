import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";
import {
  findGenreMovie,
  findGenreTVSeries,
} from "../../../../helpers/findGenre";

import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";

interface MovieItem {
  type: string;
  movie: object;
}

function MovieItem({ type, movie }: MovieItem) {
  const {
    id,
    backdrop_path: backgroundPath,
    title,
    name,
    genre_ids: genres,
    vote_average: rating,
  } = movie;
  const background = `${BASE_URL_W500}${backgroundPath}`;
  const isMovie = title ? true : false;

  const backgroundImage = { background: `url(${background})` };
  return (
    <Link
      className={`${styles.movieContainer} ${styles[type]}`}
      style={backgroundImage}
      to={`${isMovie ? `movie/${id}` : `tv/${id}`}`}
    >
      <div className={styles.options}>
        <HiCog6Tooth />
      </div>

      <div className={styles.details}>
        <div className={styles.detailsHeader}>
          <p className={styles.title}>{isMovie ? title : name}</p>
          <MovieRating rating={rating} />
        </div>
        <div className={styles.genres}>
          <span className={styles.genre}>
            {isMovie ? findGenreMovie(genres[0]) : findGenreTVSeries(genres[0])}
          </span>
          <span className={styles.genre}>
            {isMovie ? findGenreMovie(genres[1]) : findGenreTVSeries(genres[1])}
          </span>
          <span className={styles.genre}>
            {isMovie ? findGenreMovie(genres[2]) : findGenreTVSeries(genres[2])}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
