import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { findGenre } from "../../../../helpers/findGenre";

import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";
import { ItemType } from "../../../../utils/types";

interface MovieItem {
  type: string;
  movie: ItemType;
}

function MovieItem({ type, movie }: MovieItem) {
  const {
    id,
    backdrop_path: backgroundPath,
    title,
    name,
    genre_ids,
    vote_average,
  } = movie;
  const background = `${BASE_URL_W500}${backgroundPath}`;
  const noImage = `/public/Image-not-available.png`;
  const isMovie = title ? true : false;
  const genres = genre_ids.slice(0, 2);

  const backgroundImage = {
    background: `url(${backgroundPath ? background : noImage})`,
  };
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
          <MovieRating type="movieItem" rating={vote_average} />
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
