import { Link } from "react-router-dom";
import styles from "./SliderItem.module.css";

import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { BASE_URL_ORIGINAL } from "../../../../helpers/getBaseUrl";
import {
  findGenreMovie,
  findGenreTVSeries,
} from "../../../../helpers/findGenre";

interface SliderItemPropTypes {
  item: object;
  index: number;
}

function SliderItem({ item, index }: SliderItemPropTypes) {
  const {
    id,
    title,
    name,
    overview,
    backdrop_path,
    vote_average,
    release_date,
    first_air_date,
    media_type,
    genre_ids: genres,
  } = item;
  const isMovie = media_type === "movie";
  const releaseYear = (release_date || first_air_date).split("-")[0];

  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-50-100),
    var(--background-opacity-50-100)
  ), url(${BASE_URL_ORIGINAL}${backdrop_path})`,
  };

  return (
    <div
      className={styles.sliderItem}
      style={{ translate: `${-100 * index}%` }}
    >
      <div className={styles.background} style={backgroundStyles}></div>
      <div className={styles.item}>
        <Link className={styles.link} to={`${isMovie ? "movie/" : "tv/"}${id}`}>
          <h3 className={styles.title}>{title || name}</h3>
          <div className={styles.ratingMovie}>
            <MovieRating rating={vote_average} />
            <span className={styles.date}>{releaseYear}</span>
          </div>
          <div className={styles.genres}>
            <span className={styles.genre}>{isMovie ? "Movie" : "TV"}</span>
            <span className={styles.genre}>-</span>
            <span className={styles.genre}>
              {isMovie
                ? findGenreMovie(genres[0])
                : findGenreTVSeries(genres[0])}
            </span>
            <span className={styles.genre}>
              {isMovie
                ? findGenreMovie(genres[1])
                : findGenreTVSeries(genres[1])}
            </span>
            <span className={styles.genre}>
              {isMovie
                ? findGenreMovie(genres[2])
                : findGenreTVSeries(genres[2])}
            </span>
          </div>
          <p className={styles.description}>{overview}</p>
        </Link>
      </div>
    </div>
  );
}

export default SliderItem;
