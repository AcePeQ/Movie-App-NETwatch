import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";
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
import { CardItem, WatchlistItem } from "../../../../utils/types";

interface MovieItemProps {
  number: number;
  movie: CardItem;
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
    watchlist && watchlist?.find((item: WatchlistItem) => item.id === id);

  function handleModalMovie(e: React.MouseEvent<SVGAElement>) {
    e.preventDefault();

    if (!token) {
      dispatch(openModalLogin());
      return;
    }

    setModalOpen(true);
  }

  function handleCloseModal(e: React.MouseEvent<HTMLDivElement>) {
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
          {foundMovie?.user_rating && (
            <UserScore rating={foundMovie.user_rating} />
          )}
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
