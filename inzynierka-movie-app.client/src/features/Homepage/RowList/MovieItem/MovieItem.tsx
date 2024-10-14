import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { findGenre } from "../../../../helpers/findGenre";

import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";

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

interface MovieItem {
  type: string;
  movie: Item;
}

function MovieItem({ type, movie }: MovieItem) {
  const {
    id,
    backdrop_path: backgroundPath,
    title,
    name,
    genre_ids,
    vote_average: rating,
  } = movie;
  const background = `${BASE_URL_W500}${backgroundPath}`;
  const isMovie = title ? true : false;
  const genres = genre_ids.slice(0, 3);

  const backgroundImage = { background: `url(${background})` };
  return (
    <Link
      className={`${styles.movieContainer} ${styles[type]}`}
      style={backgroundImage}
      to={`${isMovie ? `/movie/${id}` : `/tv/${id}`}`}
    >
      <div className={styles.options}>
        <HiCog6Tooth />
      </div>

      <div className={styles.details}>
        <div className={styles.detailsHeader}>
          <p className={styles.title}>{isMovie ? title : name}</p>
          <MovieRating type="movieItem" rating={rating} />
        </div>
        <div className={styles.genres}>
          {genres.map((genre: number, index) => (
            <span key={index} className={styles.genre}>
              {findGenre(genre)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
