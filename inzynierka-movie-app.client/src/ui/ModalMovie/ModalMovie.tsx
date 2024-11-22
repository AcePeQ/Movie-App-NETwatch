import styles from "./ModalMovie.module.css";
import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";

import Button from "../Button/Button";
import TabModal from "./TabModal/TabModal";
import { useGetModalMovie } from "./useGetModalMovie";
import LoaderSmall from "../LoaderSmall/LoaderSmall";
import ErrorFull from "../Error/ErrorFullPage/ErrorFullPage";
import MovieRating from "../MovieRating/MovieRating";
import Select from "react-select";

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      text: `var(--text-100)`,
      primary50: `var(--accent-200)`,
      primary25: `var(--background-300)`,
      primary: `var(--accent-100)`,
      neutral0: `var(--background-200)`,
      neutral10: `var(--background-200)`,
      neutral80: `var(--text-100)`,
    },
  };
}

const customStyles = {
  control: (styles) => ({
    ...styles,
    border: "none",
    padding: "0.25rem 0.5rem",
    outline: "none",
    cursor: `pointer`,
    transition: `var(--transition-all)`,
    boxShadow: "0",
    ":hover": {
      backgroundColor: `var(--background-300)`,
    },
    ":active": {
      border: "none",
    },
  }),
  option: (styles) => ({
    ...styles,
    cursor: "pointer",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: `var(--accent-100)`,

    ":hover": {
      color: `var(--accent-100)`,
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: `var(--accent-100)`,
    width: "2px",

    ":hover": {
      backgroundColor: `var(--accent-100)`,
    },
  }),
};

interface ModalProps {
  id: number;
  isMovie: boolean;
  onClose: MouseEventHandler;
}

const statusOptions = [
  { value: "currentWatching", label: "Current Watching" },
  { value: "completed", label: "Completed" },
  { value: "planToWatch", label: "Plan to Watch" },
  { value: "onHold", label: "On Hold" },
  { value: "dropped", label: "Dropped" },
];

function ModalMovie({ id, isMovie, onClose }: ModalProps) {
  const {
    movieData: movie,
    isModalError,
    isModalLoading,
    modalError,
  } = useGetModalMovie(id, isMovie);

  if (isModalError) {
    return <ErrorFull error={modalError} />;
  }

  const posterImg = movie?.poster_path;
  const isMovieType = movie?.name ? true : false;

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay}></div>
      <div className={styles.modal} onClick={(e) => e.preventDefault()}>
        <Button type="closeButton" size="normal" onClick={onClose} />

        {isModalLoading ? (
          <LoaderSmall />
        ) : (
          <>
            <TabModal poster={posterImg}>
              <div className={styles.movieInformations}>
                <div className={styles.details}>
                  <p className={styles.title}>
                    {isMovieType ? movie.name : movie.title}
                  </p>
                  <p className={styles.informations}>
                    {isMovieType ? "TV" : "Series"}
                    {movie.genres.map((genre) => ` - ${genre.name} `)}
                  </p>

                  <div className={styles.scoreAndYearBox}>
                    <MovieRating rating={movie.vote_average} />
                    <p className={styles.year}>
                      {isMovieType ? movie.release_date : movie.first_air_date}
                    </p>
                  </div>
                </div>

                <form className={styles.form}>
                  <div className={styles.formRow}>
                    <p className={styles.formOptionName}>{movie.status}</p>
                    <div className={styles.formOptionOption}>
                      <Select
                        theme={customTheme}
                        styles={customStyles}
                        isSearchable={false}
                        options={statusOptions}
                        defaultValue={statusOptions[0]}
                        className={styles.selectContainer}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <p className={styles.formOptionName}>Episodes Watched</p>
                  </div>

                  <div className={styles.formRow}>
                    <p className={styles.formOptionName}>Overall Rating</p>
                  </div>

                  <div className={styles.formBtns}>
                    <Button size="medium" type="primary">
                      Save
                    </Button>
                    <Button size="small" type="delete">
                      Delete
                    </Button>
                  </div>
                </form>
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
