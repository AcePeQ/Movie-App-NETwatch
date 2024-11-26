import styles from "./MovieHero.module.css";

import Button from "../../../ui/Button/Button";
import MovieRating from "../../../ui/MovieRating/MovieRating";
import DetailRow from "./DetailRow/DetailRow";
import { BASE_URL_ORIGINAL, BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import { useState } from "react";
import { convertRegionISO } from "../../../helpers/formatISO";
import { ItemFullType, WatchListUser } from "../../../utils/types";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { getUserToken, getUserWatchList } from "../../Authentication/userSlice";
import { openModalLogin } from "../../Authentication/modalLoginSlice";
import ModalMovie from "../../../ui/ModalMovie/ModalMovie";
import { useParams } from "react-router-dom";

function MovieHero({ data, id }: { data: ItemFullType; id: string }) {
  const token = useAppSelector(getUserToken);
  const watchlist = useAppSelector(getUserWatchList);
  const dispatch = useAppDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  function handleModalMovie(e) {
    e.preventDefault();

    if (!token) {
      dispatch(openModalLogin());
      return;
    }

    setModalOpen(true);
  }

  function handleCloseModal(e) {
    e.preventDefault();

    setModalOpen(false);
  }

  const {
    backdrop_path: backgroundPath,
    poster_path: posterPath,
    vote_average: rating,
    vote_count: ratingVotes,
    genres,
    overview,
    status,
    origin_country,

    release_date,
    title: movieTitle,
    runtime,

    name: tvTitle,
    first_air_date: firstAir,
    last_air_date: lastAir,
    number_of_episodes: numberOfEpisodes,
    number_of_seasons: numberOfSeasons,
  } = data;

  const foundMovie =
    watchlist && watchlist?.find((item: WatchListUser) => item.id === id);

  const isMovie = movieTitle ? true : false;

  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-75-100),
    var(--background-opacity-50-100)
  ), url(${BASE_URL_ORIGINAL}${backgroundPath})`,
  };

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className={styles.movieHero} style={backgroundStyles}>
      <div className={styles.hero}>
        <img
          className={styles.image}
          src={
            posterPath
              ? `${BASE_URL_W500}${posterPath}`
              : `/public/no-pic-ave.png`
          }
          alt={`Poster of ${tvTitle || movieTitle}`}
        />
        <div className={styles.informationsContainer}>
          <div className={styles.informationsHeader}>
            <p className={styles.title}>{movieTitle || tvTitle}</p>
          </div>

          <div className={styles.additionalInformationsContainer}>
            <p className={styles.additionalInformations}>
              {isMovie && `Movie - ${release_date?.split("-")[0]} - ${status}`}
              {!isMovie &&
                `TV - ${firstAir?.split("-")[0]} - ${
                  lastAir ? lastAir?.split("-")[0] : "..."
                } - ${status}`}
            </p>
            <p className={`${styles.detailValue} ${styles.genresValue}`}>
              {genres.map((genre: { name: string }) => (
                <span key={genre.name}>{genre.name}</span>
              ))}
            </p>
          </div>

          <div className={styles.detailsContainer}>
            {foundMovie?.user_rating > 0 && (
              <DetailRow title="Your rating">
                <MovieRating rating={foundMovie.user_rating} />
              </DetailRow>
            )}
            <DetailRow title="Rating">
              <div className={styles.ratingBox}>
                <MovieRating rating={rating} type="moviePage" />
                <span className={styles.totalRates}>({ratingVotes} votes)</span>
              </div>
            </DetailRow>
            {runtime > 0 && (
              <DetailRow title="Runtime">
                <p className={styles.detailValue}>{`${
                  hours && hours.toString().padStart(2, "0")
                }h ${minutes.toString().padStart(2, "0")}min`}</p>
              </DetailRow>
            )}
            <DetailRow title="Country Production">
              <p className={styles.detailValue}>
                {convertRegionISO(origin_country[0])}
              </p>
            </DetailRow>
            {numberOfSeasons && (
              <DetailRow title="Seasons">
                <p className={styles.detailValue}>{numberOfSeasons}</p>
              </DetailRow>
            )}
            {numberOfEpisodes && (
              <DetailRow title="Episodes">
                <p className={styles.detailValue}>{numberOfEpisodes}</p>
              </DetailRow>
            )}
          </div>

          <p className={styles.description}>{overview}</p>

          <div className={styles.buttons}>
            {!foundMovie && (
              <Button size="medium" type="primary" onClick={handleModalMovie}>
                Add to list
              </Button>
            )}
            {foundMovie && (
              <Button size="medium" type="primary" onClick={handleModalMovie}>
                Edit
              </Button>
            )}
          </div>
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
    </div>
  );
}

export default MovieHero;
