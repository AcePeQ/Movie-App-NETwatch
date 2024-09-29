import styles from "./MovieHero.module.css";

import Button from "../../../ui/Button/Button";
import MovieRating from "../../../ui/MovieRating/MovieRating";
import DetailRow from "./DetailRow/DetailRow";

function MovieHero({ item }: { item: object }) {
  const {
    backdrop_path: backgroundPath,
    episode_run_time: runtime,
    first_air_date: firstAir,
    genres,
    last_air_date: lastAir,
    name: title,
    networks,
    number_of_episodes: numberOfEpisodes,
    number_of_seasons: numberSeasons,
    overview,
    poster_path: posterPath,
    status,
    vote_average: rating,
    vote_count: ratingVotes,
  } = item.tvseries;

  const backgroundStyles = {
    background: `linear-gradient(
    to top,
    var(--background-100) 5%,
    var(--background-opacity-75-100),
    var(--background-opacity-50-100)
  ), url("/public/shogun.jpg")`,
  };

  return (
    <div className={styles.movieHero} style={backgroundStyles}>
      <div className={styles.hero}>
        <img className={styles.image} src="/public/shogunPoster.webp" />
        <div className={styles.informationsContainer}>
          <div className={styles.informationsHeader}>
            <p className={styles.title}>Shogun</p>
          </div>
          <div className={styles.additionalInformationsContainer}>
            <p className={styles.additionalInformations}>
              Series - 2024 - 1 Season - Finished
            </p>
          </div>
          <div className={styles.detailsContainer}>
            <DetailRow title="Your rating">
              <MovieRating />
            </DetailRow>
            <DetailRow title="Rating">
              <div className={styles.ratingBox}>
                <MovieRating />
                <span className={styles.totalRates}>(154k votes)</span>
              </div>
            </DetailRow>
            <DetailRow title="Runtime">
              <p className={styles.detailValue}>59 min</p>
            </DetailRow>
            <DetailRow title="Age rating">
              <p className={styles.detailValue}>+18</p>
            </DetailRow>
            <DetailRow title="Country">
              <p className={styles.detailValue}>US</p>
            </DetailRow>
            <DetailRow title="Genres">
              <p className={styles.detailValue}>Action, Historical, War</p>
            </DetailRow>
          </div>

          <p className={styles.description}>
            „Shogun” to opowieść, która ukazuje nastroje panujące w Japonii w
            1600 roku. To wówczas kraj bez centralnej władzy, brodzący na
            przełomie okresów Sengoku (walczących prowincji) i Edo, w którym
            obejmujący władzę ród miał wyznaczyć kierunek kraju na następne
            dwieście lat.
          </p>

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
