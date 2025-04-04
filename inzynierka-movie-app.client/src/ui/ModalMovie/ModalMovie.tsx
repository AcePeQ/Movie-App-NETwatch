import styles from "./ModalMovie.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";

import Button from "../Button/Button";
import TabModal from "./TabModal/TabModal";
import { useGetModalMovie } from "./useGetModalMovie";
import LoaderSmall from "../LoaderSmall/LoaderSmall";
import ErrorFull from "../Error/ErrorFullPage/ErrorFullPage";
import MovieRating from "../MovieRating/MovieRating";
import { useAddMovie } from "../../features/Watchlist/useAddMovie";
import { getUserToken } from "../../features/Authentication/userSlice";
import { useAppSelector } from "../../hooks/useRedux";
import WatchedEpisodes from "../WatchedEpisodes/WatchedEpisodes";
import UserRating from "../UserRating/UserRating";
import { useDeleteMovie } from "../../features/Watchlist/useDeleteMovie";
import { useUpdateMovie } from "../../features/Watchlist/useUpdateMovie";
import SelectList from "../SelectList/SelectList";
import { Genre, WatchlistItem } from "../../utils/types";

interface ModalProps {
  id: number;
  isMovie: boolean;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
  foundMovie: WatchlistItem | undefined;
}

const statusOptions = [
  { value: "currentWatching", label: "Current Watching" },
  { value: "completed", label: "Completed" },
  { value: "planToWatch", label: "Plan to Watch" },
  { value: "onHold", label: "On Hold" },
  { value: "dropped", label: "Dropped" },
];

function ModalMovie({ id, isMovie, onClose, foundMovie }: ModalProps) {
  const [userStatus, setUserStatus] = useState(() => {
    if (foundMovie) {
      const statusMovie = foundMovie.user_status;
      const findedStatus = statusOptions.find(
        (status) => status.value === statusMovie
      );

      return findedStatus;
    }
    return statusOptions[2];
  });
  const [watchedEpisdoes, setWatchedEpisodes] = useState(() => {
    if (foundMovie) return foundMovie.watched_episodes;
    return 0;
  });
  const [userRating, setUserRating] = useState(() => {
    if (foundMovie) return foundMovie.user_rating ?? 0;
    return 0;
  });

  const {
    movieData: movie,
    isModalError,
    isModalLoading,
    modalError,
  } = useGetModalMovie(id, isMovie);

  const token = useAppSelector(getUserToken);
  const { isAddingMovie, addMovie } = useAddMovie();
  const { isDeletingMovie, deleteMovie } = useDeleteMovie();
  const { isUpdatingMovie, updateMovie } = useUpdateMovie();

  const posterImg = movie?.poster_path;
  const isMovieType = movie?.title ? true : false;

  function handleAddMovie() {
    const movie_type = isMovieType ? "movie" : "tv";
    const status = userStatus?.value;

    const selectedMovie = {
      ...movie,
      watched_episodes: watchedEpisdoes,
      user_rating: userRating,
      user_status: status,
      media_type: movie_type,
    };

    const data = { selectedMovie, token };
    addMovie(data);
  }

  function handleDeleteMovie() {
    deleteMovie({ id, token });
  }

  function handleUpdateMovie() {
    const status = userStatus?.value;

    const movie = {
      id,
      user_rating: userRating,
      user_status: status,
      watched_episodes: watchedEpisdoes,
    };

    updateMovie({ movie, token });
  }

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modal} onClick={(e) => e.preventDefault()}>
        <Button type="closeButton" size="normal" onClick={onClose} />

        {isModalError && <ErrorFull error={modalError} />}

        {isModalLoading ? (
          <LoaderSmall />
        ) : (
          <>
            <TabModal poster={posterImg}>
              <div className={styles.movieInformations}>
                <div className={styles.details}>
                  <p className={styles.title}>
                    {!isMovieType ? movie.name : movie.title}
                  </p>
                  <p className={styles.informations}>
                    {isMovieType ? "Movie" : "TV Series"}
                    {movie.genres.map((genre: Genre) => ` - ${genre.name} `)}
                  </p>

                  <div className={styles.scoreAndYearBox}>
                    <p className={styles.status}>{movie.status}</p>
                    <p className={styles.year}>
                      {isMovieType
                        ? movie.release_date.split("-")[0]
                        : movie.first_air_date.split("-")[0]}
                    </p>
                    <MovieRating rating={movie.vote_average} />
                  </div>
                </div>

                <div className={styles.form}>
                  <div className={styles.formRow}>
                    <p className={styles.formOptionName}>Status</p>
                    <div className={styles.formOptionOption}>
                      <SelectList
                        isSearchable={false}
                        options={statusOptions}
                        value={userStatus}
                        className={styles.selectContainer}
                        onChange={(newValue) => {
                          if (newValue) {
                            setUserStatus(newValue);
                          }
                        }}
                      />
                    </div>
                  </div>

                  {!isMovieType && (
                    <div className={styles.formRow}>
                      <p className={styles.formOptionName}>Episodes Watched</p>
                      <WatchedEpisodes
                        episodes={watchedEpisdoes}
                        setEpisodes={setWatchedEpisodes}
                        seasons={movie.seasons}
                      />
                    </div>
                  )}

                  <div className={styles.formRow}>
                    <p className={styles.formOptionName}>Overall Rating</p>
                    <UserRating
                      defaultRating={userRating}
                      onSetRating={setUserRating}
                    />
                  </div>

                  <div className={styles.formBtns}>
                    {!foundMovie && (
                      <Button
                        disabled={isAddingMovie}
                        size="small"
                        type="primary"
                        onClick={handleAddMovie}
                      >
                        Add
                      </Button>
                    )}
                    {foundMovie && (
                      <>
                        <Button
                          size="small"
                          type="primary"
                          disabled={isUpdatingMovie}
                          onClick={handleUpdateMovie}
                        >
                          Save
                        </Button>
                        <Button
                          size="small"
                          type="delete"
                          disabled={isDeletingMovie}
                          onClick={handleDeleteMovie}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </TabModal>
          </>
        )}
      </div>
    </>,
    document.body
  );
}

export default ModalMovie;
