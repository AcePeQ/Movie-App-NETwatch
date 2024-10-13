import { Link } from "react-router-dom";

import styles from "./SearchItem.module.css";
import { BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import MovieRating from "../../MovieRating/MovieRating";
import { findGenre } from "../../../helpers/findGenre";

function SearchItem({ item }) {
  const {
    first_air_date,
    genre_ids,
    id,
    media_type,
    name,
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
  } = item;
  const year = first_air_date
    ? first_air_date?.split("-")[0]
    : release_date?.split("-")[0];
  const isMovie = media_type === "movie";
  const genres = genre_ids.slice(0, 1);

  return (
    <Link to={`/${media_type}/${id}`} className={styles.searchItem}>
      <figure className={styles.posterContainer}>
        <img
          className={styles.poster}
          src={`${BASE_URL_W500}${poster_path}`}
          alt={`Poster of ${name ? name : title}`}
        />
      </figure>
      <div className={styles.informations}>
        <div>
          <p className={styles.title}>{isMovie ? title : name}</p>
          <div className={styles.movieTypes}>
            <div className={styles.types}>
              <p className={styles.yearAndtype}>
                {year} - {isMovie ? "Movie" : "TV"}
              </p>
              <div className={styles.genres}>
                {genres.map((genre) => (
                  <p key={genre} className={styles.genre}>
                    {findGenre(genre)}
                  </p>
                ))}
              </div>
            </div>
            <MovieRating type="search" rating={vote_average} />
          </div>
        </div>
        <p className={styles.description}>{overview}</p>
      </div>
    </Link>
  );
}

export default SearchItem;
