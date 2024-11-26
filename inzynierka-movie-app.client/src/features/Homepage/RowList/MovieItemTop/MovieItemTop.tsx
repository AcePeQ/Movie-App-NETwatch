import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";
import { ItemType, WatchListUser } from "../../../../utils/types";
import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";

import {
  getUserToken,
  getUserWatchList,
} from "../../../Authentication/userSlice";
import { openModalLogin } from "../../../Authentication/modalLoginSlice";
import { useState } from "react";
import ModalMovie from "../../../../ui/ModalMovie/ModalMovie";
import UserScore from "../../../../ui/UserScore/UserScore";

interface MovieItemProps {
  number: number;
  movie: ItemType;
}

function MovieItemTop({ number, movie }: MovieItemProps) {
  const token = useAppSelector(getUserToken);
  const watchlist = useAppSelector(getUserWatchList);
  const dispatch = useAppDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const { id, title, poster_path: backgroundPath } = movie;
  const background = `${BASE_URL_W500}${backgroundPath}`;
  const isMovie = title ? true : false;

  const foundMovie =
    watchlist && watchlist?.find((item: WatchListUser) => item.id === id);

  function handleModalMovie(e: MouseEvent) {
    e.preventDefault();

    if (!token) {
      dispatch(openModalLogin());
      return;
    }

    setModalOpen(true);
  }

  function handleCloseModal(e: MouseEvent) {
    e.preventDefault();

    setModalOpen(false);
  }

  return (
    <Link
      className={styles.link}
      to={`${isMovie ? `/movie/${id}` : `/tv/${id}`}`}
    >
      <div className={styles.number} data-text={`${number}`}>
        {number}
      </div>
      <div className={styles.movie}>
        <img
          src={backgroundPath ? background : `/public/no-pic-ave.png`}
          className={styles.image}
          alt={`Poster of ${title}`}
        />

        <div className={styles.options}>
          {foundMovie && <UserScore rating={foundMovie.user_rating} />}
          {foundMovie ? (
            <HiCog6Tooth onClick={handleModalMovie} />
          ) : (
            <HiPlusCircle onClick={handleModalMovie} />
          )}
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

export default MovieItemTop;
