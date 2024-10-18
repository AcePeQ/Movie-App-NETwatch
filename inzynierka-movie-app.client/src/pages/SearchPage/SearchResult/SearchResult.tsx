import { Link } from "react-router-dom";

import styles from "./SearchResult.module.css";
import { BASE_URL_W200 } from "../../../helpers/getBaseUrl";
import { findGenre } from "../../../helpers/findGenre";
import MovieRating from "../../../ui/MovieRating/MovieRating";
import { useMediaQuery } from "react-responsive";

function SearchResult({ item }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 580px)",
  });

  const {
    first_air_date,
    genre_ids,
    id,
    name,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = item;
  const year = first_air_date
    ? first_air_date.split("-")[0]
    : release_date.split("-")[0];

  return (
    <li className={styles.search_item}>
      <img
        src={
          poster_path
            ? `${BASE_URL_W200}${poster_path}`
            : `/public/no-pic-ave.png`
        }
        className={styles.poster}
        alt={`Poster of ${name || title}`}
      />
      <div className={styles.item}>
        <p className={styles.item_title}>
          {name || title} ({year})
        </p>
        {!isMobile && (
          <>
            <MovieRating rating={vote_average} />
            <div className={styles.genres}>
              {genre_ids.map((genre) => (
                <span key={genre} className={styles.genre}>
                  {findGenre(genre)}
                </span>
              ))}
            </div>
          </>
        )}
        <p className={styles.item_overview}>{overview}</p>
      </div>
    </li>
  );
}

export default SearchResult;
