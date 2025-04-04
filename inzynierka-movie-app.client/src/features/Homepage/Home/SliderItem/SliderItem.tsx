import { Link } from "react-router-dom";
import styles from "./SliderItem.module.css";

import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { BASE_URL_ORIGINAL } from "../../../../helpers/getBaseUrl";
import { findGenre } from "../../../../helpers/findGenre";
import { GeneralProductionItem } from "../../../../utils/types";

interface SliderItemPropTypes {
  item: GeneralProductionItem;
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
    genre_ids,
  } = item;

  const isMovie = media_type === "movie";
  const releaseYear = (release_date || first_air_date)?.split("-")[0];
  const genres = genre_ids?.slice(0, 3);

  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-50-100),
    var(--background-opacity-50-100)
  ),
  url(${BASE_URL_ORIGINAL}${backdrop_path})`,
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
            <span className={styles.date}>{releaseYear}</span>
            <MovieRating rating={vote_average} />
          </div>
          <div className={styles.genres}>
            <span className={styles.genre}>{isMovie ? "Movie" : "TV"}</span>
            <span className={styles.genre}>-</span>
            {genres?.map((genre: number, index) => (
              <span key={index} className={styles.genre}>
                {findGenre(genre)}
              </span>
            ))}
          </div>
          <p className={styles.description}>{overview}</p>
        </Link>
      </div>
    </div>
  );
}

export default SliderItem;
