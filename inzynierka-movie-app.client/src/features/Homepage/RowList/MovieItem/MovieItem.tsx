import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { findGenre } from "../../../../helpers/findGenre";

import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";
import { ItemType } from "../../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";
import { getUser } from "../../../Authentication/userSlice";
import { useState } from "react";
import ModalMovie from "../../../../ui/ModalMovie/ModalMovie";
import { openModalLogin } from "../../../Authentication/modalLoginSlice";

interface MovieItem {
  type: string;
  movie: ItemType;
}

function MovieItem({ type, movie }: MovieItem) {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

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

  function handleAddMovie(e) {
    e.preventDefault();

    if (!user) {
      dispatch(openModalLogin());
      return;
    }

    setModalOpen(true);
  }

  function handleCloseModal(e) {
    e.preventDefault();

    setModalOpen(false);
  }

  return (
    <Link
      className={`${styles.movieContainer} ${styles[type]}`}
      style={backgroundImage}
      to={`${isMovie ? `/movie/${id}` : `/tv/${id}`}`}
    >
      <div className={styles.options} onClick={handleAddMovie}>
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

      {isModalOpen && (
        <ModalMovie id={id} isMovie={isMovie} onClose={handleCloseModal} />
      )}
    </Link>
  );
}

export default MovieItem;
