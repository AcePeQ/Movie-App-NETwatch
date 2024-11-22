import { Link } from "react-router-dom";

import { HiPlusCircle } from "react-icons/hi";

// import { HiCog6Tooth } from "react-icons/hi2";

import styles from "./MovieItemTop.module.css";
import { ItemType } from "../../../../utils/types";
import { BASE_URL_W500 } from "../../../../helpers/getBaseUrl";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";

import { getUser } from "../../../Authentication/userSlice";
import { openModalLogin } from "../../../Authentication/modalLoginSlice";
import { useState } from "react";
import ModalMovie from "../../../../ui/ModalMovie/ModalMovie";

interface MovieItemProps {
  number: number;
  movie: ItemType;
}

function MovieItemTop({ number, movie }: MovieItemProps) {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const { id, title, poster_path: backgroundPath } = movie;
  const background = `${BASE_URL_W500}${backgroundPath}`;
  const isMovie = title ? true : false;

  function handleAddMovie(e: MouseEvent) {
    e.preventDefault();

    if (!user) {
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
          {/* <HiCog6Tooth /> */}
          <HiPlusCircle onClick={handleAddMovie} />
        </div>
      </div>

      {isModalOpen && (
        <ModalMovie id={id} isMovie={isMovie} onClose={handleCloseModal} />
      )}
    </Link>
  );
}

export default MovieItemTop;
