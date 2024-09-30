import styles from "./MovieHero.module.css";

import Button from "../../../ui/Button/Button";
import MovieRating from "../../../ui/MovieRating/MovieRating";
import DetailRow from "./DetailRow/DetailRow";
import { BASE_URL_ORIGINAL, BASE_URL_W500 } from "../../../helpers/getBaseUrl";
import { useState } from "react";

function MovieHero({ item, type }: { item: object; type: string }) {
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
  } = item[type];

  const [isRated, setIsRated] = useState(false);
  const isMovie = movieTitle ? true : false;

  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-75-100),
    var(--background-opacity-50-100)
  ), url(${BASE_URL_ORIGINAL}${backgroundPath})`,
  };

  return (
    <div className={styles.movieHero} style={backgroundStyles}>
      <div className={styles.hero}>
        <img className={styles.image} src={`${BASE_URL_W500}${posterPath}`} />
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
          </div>
          <div className={styles.detailsContainer}>
            {isRated && (
              <DetailRow title="Your rating">
                <MovieRating />
              </DetailRow>
            )}
            <DetailRow title="Rating">
              <div className={styles.ratingBox}>
                <MovieRating rating={rating} />
                <span className={styles.totalRates}>({ratingVotes} votes)</span>
              </div>
            </DetailRow>
            {runtime > 0 && (
              <DetailRow title="Runtime">
                <p className={styles.detailValue}>{runtime}</p>
              </DetailRow>
            )}
            <DetailRow title="Country">
              <p className={styles.detailValue}>{origin_country}</p>
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
            <DetailRow title="Genres">
              <p className={`${styles.detailValue} ${styles.genresValue}`}>
                {genres[0]?.name} {genres[1]?.name}
              </p>
            </DetailRow>
          </div>

          <p className={styles.description}>{overview}</p>

          <div className={styles.buttons}>
            <Button size="medium" type="primary">
              Add to list
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;
