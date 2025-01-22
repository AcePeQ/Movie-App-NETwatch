import { Link } from "react-router-dom";

import { HiCog6Tooth } from "react-icons/hi2";
import { HiPlusCircle } from "react-icons/hi";

import styles from "./MovieItem.module.css";
import MovieRating from "../../../../ui/MovieRating/MovieRating";
import { findGenre } from "../../../../helpers/findGenre";

import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";
import { ItemFullType, ItemType, WatchListUser } from "../../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";
import {
  getUserToken,
  getUserWatchList,
} from "../../../Authentication/userSlice";
import { useState } from "react";
import ModalMovie from "../../../../ui/ModalMovie/ModalMovie";
import { openModalLogin } from "../../../Authentication/modalLoginSlice";
import UserScore from "../../../../ui/UserScore/UserScore";

interface MovieItem {
  type?: string;
  movie: ItemType;
}

function MovieItem({ type, movie }: MovieItem) {
  const token = useAppSelector(getUserToken);
  const watchlist = useAppSelector(getUserWatchList);
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
  const genres = genre_ids ? genre_ids.slice(0, 2) : [];

  const foundMovie =
    watchlist && watchlist?.find((item: WatchListUser) => item.id === id);

  const backgroundImage = {
    background: `url(${backgroundPath ? background : noImage})`,
  };

  function handleModalMovie(e: Event) {
    e.preventDefault();

    if (!token) {
      dispatch(openModalLogin());
      return;
    }

    setModalOpen(true);
  }

  function handleCloseModal(e: Event) {
    e.preventDefault();

    setModalOpen(false);
  }

  return (
    <Link
      className={`${styles.movieContainer} ${styles[type]}`}
      style={backgroundImage}
      to={`${isMovie ? `/movie/${id}` : `/tv/${id}`}`}
    >
      <div className={styles.options}>
        {foundMovie && <UserScore rating={foundMovie.user_rating} />}
        {foundMovie ? (
          <HiCog6Tooth onClick={handleModalMovie} />
        ) : (
          <HiPlusCircle onClick={handleModalMovie} />
        )}
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
        <ModalMovie
          id={id}
          isMovie={isMovie}
          onClose={handleCloseModal}
          foundMovie={foundMovie}
        />
      )}
    </Link>
  );
}

export default MovieItem;
